<template>
	<v-number-input
		v-bind="inputProps"
		class="baran-number-input"
	></v-number-input>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { VNumberInput } from "vuetify/labs/VNumberInput"; // Labs components require a manual import and installation of the component.

const props = defineProps({
	controlVariant: {
		type: String,
		default: "stacked",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	label: {
		type: String,
		default: "Number",
	},
	variant: {
		type: String,
		default: "outlined",
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
	hideInput: {
		type: Boolean,
		default: false,
	},
	inset: {
		type: Boolean,
		default: false,
	},
	reverse: {
		type: Boolean,
		default: false,
	},
	min: Number,
	max: Number,
	step: Number,
});

const inputProps = computed(() => {
	// I collected all the props here to increase readability.
	const variantOptions = [
		"outlined",
		"filled",
		"solo",
		"solo-inverted",
		"solo-full",
	];
	const densityOptions = ["comfortable", "compact"];

	return {
		controlVariant: props.controlVariant,
		color: props.color,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		disabled: props.disabled,
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		class: props.class,
		rounded: props.rounded,
		loading: props.loading,
		label: props.label,
		hideInput: props.hideInput,
		inset: props.inset,
		reverse: props.reverse,
		min: props.min,
		max: props.max,
		step: props.step,
	};
});
</script>

<style>
.baran-number-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-number-input
	.v-field--variant-outlined.v-field--focused
	.v-field__outline {
	color: var(--primary) !important;
}
</style>
