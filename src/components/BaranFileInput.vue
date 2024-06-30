<template>
	<v-file-input
		v-bind="fileInputProps"
		class="baran-file-input"
	></v-file-input>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	rules: {
		tpye: Array,
		default: () => [],
	},
	accept: {
		type: String,
		default: "",
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
	label: {
		type: String,
		default: "File",
	},
	appendInnerIcon: {
		type: String,
		default: "mdi-attachment",
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
	hint: {
		type: String,
		default: "",
	},
	counter: {
		type: Boolean,
		default: false,
	},
	showSize: {
		type: Boolean,
		default: false,
	},
});

const fileInputProps = computed(() => {
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
		accept: props.accept,
		rules: props.rules,
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
		"persistent-hint": props.persistentHint,
		counter: props.counter,
		"show-size": props.showSize,
	};
});
</script>

<style>
.baran-file-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-file-input
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
</style>
