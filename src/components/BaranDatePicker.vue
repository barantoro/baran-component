<template>
	<v-date-picker v-bind="datePickerProps"></v-date-picker>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
	color: {
		type: String,
		default: "#7367f0",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	showAdjacentMonths: {
		type: Boolean,
		default: false,
	},
	hideCanvas: {
		type: Boolean,
		default: false,
	},
	hideInputs: {
		type: Boolean,
		default: false,
	},
	elevation: {
		type: Number,
		default: 2,
	},
	class: {
		type: String,
		default: "",
	},
	rounded: {
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
	min: {
		type: String,
		default: "",
	},
	max: {
		type: String,
		default: "",
	},
});

const datePickerProps = computed(() => {
	return {
		disabled: props.disabled,
		"show-adjacent-months": props.showAdjacentMonths,
		elevation: props.elevation,
		class: props.class,
		rounded: props.rounded,
		width: props.width,
		"max-width": props.maxWidth,
		"min-width": props.minWidth,
		height: props.height,
		"max-height": props.maxHeight,
		"min-height": props.minHeight,
		color: props.color,
		min: props.min,
		max: props.max,
	};
});
</script>
