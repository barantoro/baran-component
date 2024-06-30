<template>
	<v-color-picker
		v-bind="colorPickerProps"
		v-model:mode="defMode"
	></v-color-picker>
</template>

<script setup>
import { defineProps, computed, ref, watch } from "vue";

const props = defineProps({
	disabled: {
		type: Boolean,
		default: false,
	},
	showSwatches: {
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
	swatchesMaxHeight: {
		type: Number,
		default: 0,
	},
	width: {
		type: String,
		default: "300px",
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

const colorPickerProps = computed(() => {
	return {
		disabled: props.disabled,
		"show-swatches": props.showSwatches,
		"hide-canvas": props.hideCanvas,
		"hide-inputs": props.hideInputs,
		elevation: props.elevation,
		"swatches-max-height":
			props.swatchesMaxHeight > 0 ? props.swatchesMaxHeight : undefined,
		width: props.width,
		"max-width": props.maxWidth,
		"min-width": props.minWidth,
		height: props.height,
		"max-height": props.maxHeight,
		"min-height": props.minHeight,
	};
});

let defMode = ref("rgba");
</script>
