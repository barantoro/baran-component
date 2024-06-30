<template>
	<div>
		<v-text-field
			v-if="searchBar"
			v-model="search"
			v-bind="tableSearchProps"
			class="baran-table-search"
		></v-text-field>

		<v-data-table
			v-bind="tableProps"
			class="baran-table"
			@update:sort-by="updateSortBy"
		>
			<!-- Header Slot -->
			<template v-if="$slots['header.id']" v-slot:header.id="{ column }">
				<slot name="header.id" :column="column"></slot>
			</template>

			<!-- Headers Slot -->
			<template
				v-if="$slots.headers"
				v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }"
			>
				<slot
					name="headers"
					:columns="columns"
					:isSorted="isSorted"
					:getSortIcon="getSortIcon"
					:toggleSort="toggleSort"
				></slot>
			</template>

			<!-- Item Slot -->
			<template v-if="$slots.item" v-slot:item="{ item }">
				<slot name="item" :item="item"></slot>
			</template>

			<!-- Item Key Slot -->
			<template
				v-if="$slots['item.calories']"
				v-slot:item.calories="{ value }"
			>
				<slot name="item.calories" :value="value"></slot>
			</template>

			<!-- Group Header Slot -->
			<template
				v-if="$slots['group-header']"
				v-slot:group-header="{
					item,
					columns,
					toggleGroup,
					isGroupOpen,
				}"
			>
				<slot
					name="group-header"
					:item="item"
					:columns="columns"
					:toggleGroup="toggleGroup"
					:isGroupOpen="isGroupOpen"
				></slot>
			</template>

			<!-- Loading Slot -->
			<template v-if="$slots.loading" v-slot:loading>
				<slot name="loading"></slot>
			</template>
		</v-data-table>
	</div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, computed } from "vue";

const props = defineProps({
	headers: {
		type: Array,
		default: () => [
			{ key: "id", title: "INVOICE ID" },
			{ key: "name", title: "RECIPIENT NAME" },
			{ key: "date", title: "DATE" },
			{ key: "amount", title: "AMOUNT" },
			{ key: "status", title: "STATUS" },
		],
	},
	items: {
		type: Array,
		default: () => [
			{
				id: 1,
				name: "Eric Cartman",
				date: "23 Jun, 2024",
				amount: "$119.99",
				status: "Completed",
			},
			{
				id: 2,
				name: "Kenny McCormick",
				date: "14 Jun, 2024",
				amount: "$39.99",
				status: "Pending",
			},
		],
	},
	theme: {
		type: String,
		default: "light",
	},
	itemsPerPage: {
		type: Number,
		default: 5,
	},
	searchPrependIcon: {
		type: String,
		default: "mdi-magnify",
	},
	searchLabel: {
		type: String,
		default: "Search",
	},
	searchColor: {
		type: String,
		default: "#7367f0",
	},
	searchVariant: {
		type: String,
		default: "underlined",
	},
	searchBar: {
		type: Boolean,
		default: true,
	},
	selected: {
		type: Array,
		default: () => [],
	},
	sortBy: {
		type: Array,
		default: () => [],
	},
	density: {
		type: String,
		default: "compact",
	},
	hideDefaultFooter: {
		type: Boolean,
		default: false,
	},
	hideDefaultHeader: {
		type: Boolean,
		default: false,
	},
	height: {
		type: String,
		default: "",
	},
	fixedHeader: {
		type: Boolean,
		default: false,
	},
	showSelect: {
		type: Boolean,
		default: false,
	},
	itemValue: {
		type: String,
		default: "",
	},
	selectableKey: {
		type: String,
		default: "",
	},
	selectStrategy: {
		type: String,
		default: "",
	},
	multiSort: {
		type: Boolean,
		default: false,
	},
});

const tableProps = computed(() => {
	return {
		headers: props.headers,
		items: props.items,
		"items-per-page": props.itemsPerPage,
		"show-select": props.showSelect,
		"item-value": props.itemValue,
		theme: props.theme,
		height: props.height,
		"fixed-header": props.fixedHeader,
		"return-object": true,
		"item-selectable": props.selectableKey,
		"select-strategy": props.selectStrategy,
		"sort-by": internalSortBy.value,
		"multi-sort": props.multiSort,
		density: props.density,
		"hide-default-footer": props.hideDefaultFooter,
		"hide-default-header": props.hideDefaultHeader,
	};
});

const tableSearchProps = computed(() => {
	return {
		label: props.searchLabel,
		"prepend-inner-icon": props.searchPrependIcon,
		color: props.searchColor,
		variant: props.searchVariant,
		"hide-details": true,
		"single-line": true,
		density: "comfortable",
	};
});

const search = ref("");
const selected = ref(props.selected);
const internalSortBy = ref(props.sortBy);

const emit = defineEmits(["update:selected", "update:sortBy"]);

watch(selected, (newValue) => {
	emit("update:selected", newValue);
});

watch(
	() => props.sortBy,
	(newVal) => {
		internalSortBy.value = newVal;
	}
);

const updateSortBy = (newVal) => {
	emit("update:sortBy", newVal);
};
</script>

<style>
.baran-table-search .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-table-search
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
.baran-table .v-data-table-header__content {
	color: var(--title);
}
.baran-table .v-data-table__tr {
	color: var(--text);
}
.baran-table .v-data-table-footer__items-per-page,
.baran-table .v-data-table-footer__info {
	color: var(--subtitle);
}
</style>
