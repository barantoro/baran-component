<template>
	<v-chip v-bind="chipsProps" @click="handleClick" class="baran-chips">
		<slot name="prepend"></slot>
		<slot>{{ title }}</slot>
	</v-chip>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	title: {
		type: String,
		default: "Chip",
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	elevation: {
		type: Number,
		default: 0,
	},
	size: {
		type: String,
		default: "default",
	},
	variant: {
		type: String,
		default: "tonal",
	},
	prependIcon: {
		type: String,
		default: "",
	},
	appendIcon: {
		type: String,
		default: "",
	},
	closable: {
		type: Boolean,
		default: false,
	},
	label: {
		type: Boolean,
		default: false,
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
		default: "",
	},
});

const chipsProps = computed(() => {
	const variantOptions = ["outlined", "elevated", "text", "plain"];
	const densityOptions = ["comfortable", "compact"];

	return {
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		closable: props.closable,
		color: props.color,
		size: props.size,
		label: props.label,
		disabled: props.disabled,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		class: props.class,
		elevation: props.elevation,
	};
});

const emit = defineEmits(["click"]);

function handleClick(event) {
	emit("click", event);
}
</script>

<style>
.v-chip--variant-tonal {
	border: 1px solid;
}
</style>
