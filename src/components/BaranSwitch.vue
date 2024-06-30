<template>
	<v-switch v-bind="switchProps" v-model="model" class="baran-switch">
		<template v-slot:label v-if="$slots.default">
			<slot></slot>
		</template>
	</v-switch>
</template>

<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
	indeterminate: {
		type: Boolean,
		default: true,
	},
	label: {
		type: String,
		default: "Switch",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
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
	inset: {
		type: Boolean,
		default: false,
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	falseValue: {
		type: String,
		default: false,
	},
	trueValue: {
		type: String,
		default: true,
	},
});

const switchProps = computed(() => {
	return {
		label: props.label,
		indeterminate: props.indeterminate,
		inset: props.inset,
		color: props.color,
		"false-value": props.falseValue,
		"true-value": props.trueValue,
		disabled: props.disabled,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		class: props.class,
		loading: props.loading ? "warning" : undefined,
	};
});

const model = ref(null);
</script>

<style>
.baran-switch .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-switch .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
