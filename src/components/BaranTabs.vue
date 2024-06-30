<template>
	<v-card v-bind="wrapperProps" class="baran-tabs-wrapper">
		<v-tabs v-model="tab" v-bind="tabProps">
			<v-tab v-for="item in items" :key="item.id" :value="item.id">
				<v-icon v-if="item.icon" :icon="item.icon" class="mr-4" />
				{{ item.tabText }}
				<slot name="tab" :item="item"></slot>
			</v-tab>
		</v-tabs>

		<v-card-text>
			<v-tabs-window v-model="tab">
				<v-tabs-window-item
					v-for="item in items"
					:key="item.id"
					:value="item.id"
				>
					{{ item.tabContent }}
					<slot :name="'tabContent-' + item.id" :item="item"></slot>
				</v-tabs-window-item>
			</v-tabs-window>
		</v-card-text>
	</v-card>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const tab = ref(null);

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				id: 1,
				tabText: "1st Tab",
				tabContent: "Content for 1st Tab",
			},
			{
				id: 2,
				tabText: "2nd Tab",
				tabContent: "Content for 2nd Tab",
			},
		],
	},
	tabBackground: {
		type: String,
		default: "#7367f0",
	},
	alignTabs: {
		type: String,
		default: "start",
	},
	showArrows: {
		type: Boolean,
		default: true,
	},
	rounded: {
		type: String,
		default: "xs",
	},
	elevation: {
		type: Number,
		default: 2,
	},
	activeColor: {
		type: String,
		default: "",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	class: {
		type: String,
		default: "",
	},
	density: {
		type: String,
		default: "compact",
	},
	centerActive: {
		type: Boolean,
		default: false,
	},
	prevIcon: {
		type: String,
		default: "",
	},
	nextIcon: {
		type: String,
		default: "",
	},
	grow: {
		type: Boolean,
		default: false,
	},
	vertical: {
		type: Boolean,
		default: false,
	},
	stacked: {
		type: Boolean,
		default: false,
	},
	width: {
		type: String,
		default: "",
	},
	maxWidth: {
		type: String,
		default: "",
	},
	minWidth: {
		type: String,
		default: "",
	},
	height: {
		type: String,
		default: "",
	},
	maxHeight: {
		type: String,
		default: "",
	},
	minHeight: {
		type: String,
		default: "",
	},
});

const tabProps = computed(() => ({
	// I collected all the props here to increase readability.
	color: props.activeColor,
	"bg-color": props.tabBackground,
	disabled: props.disabled,
	density: ["comfortable", "compact"].includes(props.density)
		? props.density
		: undefined,
	class: props.class,
	"align-tabs": props.alignTabs,
	"center-active": props.centerActive,
	"next-icon": props.nextIcon || undefined,
	"prev-icon": props.prevIcon || undefined,
	grow: props.grow,
	"show-arrows": props.showArrows,
	direction: props.vertical ? "vertical" : undefined,
	stacked: props.stacked,
}));

const wrapperProps = computed(() => ({
	rounded: props.rounded,
	elevation: props.elevation,
	width: props.width,
	"max-width": props.maxWidth,
	"min-width": props.minWidth,
	height: props.height,
	"max-height": props.maxHeight,
	"min-height": props.minHeight,
}));
</script>

<style>
.baran-tabs-wrapper .v-tabs-window {
	color: var(--text);
}
</style>
