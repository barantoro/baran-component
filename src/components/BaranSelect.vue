<template>
	<v-select v-bind="selectProps" class="baran-select"></v-select>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	items: {
		tpye: Array,
		default: () => ["Item 1", "Item 2", "Item 3"],
	},
	label: {
		type: String,
		default: "Select",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	chips: {
		type: Boolean,
		default: false,
	},
	multiple: {
		type: Boolean,
		default: false,
	},
	prependInnerIcon: {
		type: String,
		default: "",
	},
	appendInnerIcon: {
		type: String,
		default: "",
	},
	loading: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	prependIcon: {
		type: String,
		default: "",
	},
	appendIcon: {
		type: String,
		default: "",
	},
	class: {
		type: String,
		default: "",
	},
	density: {
		type: String,
		default: "compact",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	persistentHint: {
		type: Boolean,
		default: false,
	},
	returnObject: {
		type: Boolean,
		default: false,
	},
	singleLine: {
		type: Boolean,
		default: false,
	},
	hint: {
		type: String,
		default: "",
	},
	itemTitle: {
		type: String,
		default: "",
	},
	itemValue: {
		type: String,
		default: "",
	},
});

const selectProps = computed(() => {
	// I collected all the props here to increase readability.
	const variantOptions = [
		"outlined",
		"underlined",
		"solo",
		"solo-filled",
		"solo-inverted",
	];
	const densityOptions = ["comfortable", "compact"];

	return {
		items: props.items,
		label: props.label,
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		clearable: props.clearable,
		chips: props.chips,
		multiple: props.multiple,
		color: props.color,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		"prepend-inner-icon": props.prependInnerIcon,
		"append-inner-icon": props.appendInnerIcon,
		disabled: props.disabled,
		rounded: props.rounded,
		loading: props.loading,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		class: props.class,
		readonly: props.readonly,
		hint: props.hint,
		"item-title": props.itemTitle,
		"item-value": props.itemValue,
		"persistent-hint": props.persistentHint,
		"return-object": props.returnObject,
		"single-line": props.singleLine,
	};
});
</script>

<style>
.baran-select .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-select .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
