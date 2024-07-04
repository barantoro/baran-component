<template>
	<v-text-field v-bind="computedProps" class="baran-textbox">
		<template v-if="$slots['prepend']" #prepend>
			<slot name="prepend"></slot>
		</template>

		<template v-if="$slots['prepend-inner']" #prepend-inner>
			<slot name="prepend-inner"></slot>
		</template>

		<template v-if="$slots['label']" #label>
			<slot name="label"></slot>
		</template>

		<template v-if="$slots.append" #append>
			<slot name="append"></slot>
		</template>

		<template v-if="$slots['append-inner']" #append-inner>
			<slot name="append-inner"></slot>
		</template>

		<template v-if="$slots['details']" #details>
			<slot name="details"></slot>
		</template>
		
	</v-text-field>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	label: {
		type: String,
		default: "Text field",
	},
	variant: {
		type: String,
		default: "outlined",
	},
	density: {
		type: String,
		default: "compact",
	},
	type: {
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		default: "Type something",
	},
});

const computedProps = computed(() => {
	const variantOptions = [ "outlined", "underlined", "solo", "solo-filled", "solo-inverted", "plain", ];
	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : 'outlined',
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
