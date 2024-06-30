<template>
	<v-otp-input v-bind="otpInputProps" class="baran-otp-input"></v-otp-input>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	length: {
		type: Number,
		default: 6,
	},
	variant: {
		type: String,
		default: "outlined",
	},
	backgroundColor: {
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
	loading: {
		type: Boolean,
		default: false,
	},
	focusAll: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		default: "-",
	},
	divider: {
		type: String,
		default: "",
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

const otpInputProps = computed(() => {
	// I collected all the props here to increase readability.
	const variantOptions = ["solo", "solo-filled", "underlined"];

	return {
		length: props.length,
		color: props.backgroundColor,
		disabled: props.disabled,
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		class: props.class,
		loading: props.loading,
		"focus-all": props.focusAll,
		placeholder: props.placeholder,
		divider: props.divider,
		width: props.width,
		"max-width": props.maxWidth,
		"min-width": props.minWidth,
		height: props.height,
		"max-height": props.maxHeight,
		"min-height": props.minHeight,
	};
});
</script>

<style>
.baran-otp-input .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-otp-input .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
