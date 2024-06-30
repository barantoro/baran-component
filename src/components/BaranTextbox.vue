<template>
	<v-text-field
		v-model="internalValue"
		v-bind="computedProps"
		class="baran-textbox"
	>
		<!-- <template v-if="prependIcon" #prepend-inner>
      <v-icon>{{ prependIcon }}</v-icon>
    </template>
    <template v-if="appendIcon" #append>
      <v-icon>{{ appendIcon }}</v-icon>
    </template>
    <template v-if="appendInnerIcon" #append-inner>
      <v-icon>{{ appendInnerIcon }}</v-icon>
    </template> -->
	</v-text-field>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "Text",
	},
	value: {
		type: [String, Number],
		default: "",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
	prependIcon: {
		type: String,
		default: "",
	},
	appendIcon: {
		type: String,
		default: "",
	},
	appendInnerIcon: {
		type: String,
		default: "",
	},
	clearable: {
		type: Boolean,
		default: false,
	},
	type: {
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		default: "Type something",
	},
	hint: {
		type: String,
		default: "",
	},
	persistentHint: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	rules: {
		type: Array,
		default: () => [],
	},
	prefix: {
		type: String,
		default: "",
	},
	suffix: {
		type: String,
		default: "",
	},
	maxlength: {
		type: [String, Number],
		default: "",
	},
	counter: {
		type: Boolean,
		default: false,
	},
	singleLine: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["update:value"]);
const internalValue = ref(props.value);

watch(internalValue, (newValue) => {
	emit("update:value", newValue);
});

watch(
	() => props.value,
	(newValue) => {
		internalValue.value = newValue;
	}
);

const computedProps = computed(() => {
	const variantOptions = [
		"outlined",
		"underlined",
		"solo",
		"solo-filled",
		"solo-inverted",
		"plain",
	];
	const densityOptions = ["comfortable", "compact"];

	return {
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		label: props.label,
		placeholder: props.placeholder,
		type: props.type,
		hint: props.hint,
		disabled: props.disabled,
		readonly: props.readonly,
		rules: props.rules,
		prefix: props.prefix,
		suffix: props.suffix,
		maxlength: props.maxlength,
		counter: props.counter,
		clearable: props.clearable,
		"persistent-hint": props.persistentHint,
		"single-line": props.singleLine,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		"append-inner-icon": props.appendInnerIcon,
	};
});
</script>

<style>
.baran-textbox input[type="date"]::-webkit-inner-spin-button,
.baran-textbox input[type="date"]::-webkit-calendar-picker-indicator {
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
}
.baran-textbox .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-textbox .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
