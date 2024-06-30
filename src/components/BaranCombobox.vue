<template>
	<v-combobox
		v-model="selectedItem"
		v-model:search="search"
		v-bind="computedProps"
		class="baran-combobox"
	>
		<template v-slot:selection="data" v-if="customSlot">
			<slot name="selectionContent" :data="data"></slot>
		</template>
		<template v-slot:no-data v-if="noData">
			<v-list-item>
				<v-list-item-title>
					No results matching "<strong>{{ search }}</strong
					>". Press <kbd>enter</kbd> to create a new one
				</v-list-item-title>
			</v-list-item>
		</template>
	</v-combobox>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => ["Item 1", "Item 2", "Item 3"],
	},
	label: {
		type: String,
		default: "Select",
	},
	placeholder: {
		type: String,
		default: "Select an item",
	},
	density: {
		type: String,
		default: "compact",
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	chips: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	customSlot: {
		type: Boolean,
		default: false,
	},
	hint: {
		type: String,
		default: "",
	},
	noData: {
		type: Boolean,
		default: false,
	},
	hideSelected: {
		type: Boolean,
		default: false,
	},
	variant: {
		type: String,
		default: "outlined",
	},
	class: {
		type: String,
		default: "",
	},
	persistentHint: {
		type: Boolean,
		default: false,
	},
});

const selectedItem = ref(null);
const search = ref(null);

const computedProps = computed(() => {
	const variantOptions = [
		"outlined",
		"underlined",
		"solo",
		"solo-filled",
		"solo-inverted",
	];
	const densityOptions = ["comfortable", "compact"];

	return {
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		items: props.items,
		label: props.label,
		placeholder: props.placeholder,
		multiple: props.multiple,
		chips: props.chips,
		readonly: props.readonly,
		hint: props.hint,
		"persistent-hint": props.persistentHint,
		"hide-selected": props.hideSelected,
		"hide-no-data": !props.noData,
		class: props.class,
	};
});
</script>

<style>
.baran-combobox .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-combobox .v-field--variant-outlined:hover {
	border-color: var(--primary) !important;
}
.baran-combobox .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
.v-overlay--absolute .v-list-item-title {
	font-size: 15px;
	line-height: 1.25;
}
.v-overlay--absolute .v-list-item--density-default.v-list-item--one-line {
	min-height: 38px !important;
	color: var(--text);
}
</style>
