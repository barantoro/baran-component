<template>
	<v-list v-bind="computedProps" class="baran-list-wrapper">
		<template v-if="$slots['default']" #default>
			<slot name="default"></slot>
		</template>
	</v-list>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => []
	},
	density: {
		type: String,
		default: "comfortable",
	},
	variant: {
		type: String,
		default: "text",
	},
});

const computedProps = computed(() => {
	const variantOptions = [ "outlined", "tonal", "elevated", "flat", "text", "plain" ];
	const densityOptions = ["comfortable", "compact"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : "text",
		density: densityOptions.includes(props.density) ? props.density : "default",
		 
	};
});
 
</script>

<style>

</style>
