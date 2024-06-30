<template>
	<v-radio-group v-bind="radiosProps" v-model="radios" class="baran-radio">
		<v-radio
			v-for="item in items"
			:key="item.value"
			:label="item.label"
			:value="item.value"
		>
			<template v-slot:label v-if="item.slotHTML">
				<div v-html="item.slotHTML"></div>
			</template>
		</v-radio>
	</v-radio-group>
</template>

<script setup>
import { defineProps, computed, ref, watch, defineEmits } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				value: 1,
				label: "Radio",
			},
			{
				value: 2,
				slotHTML:
					'<div>Radio <strong class="text-primary">w/custom HTML label</strong></div>',
			},
		],
	},
	color: {
		type: String,
		default: "#7367f0",
	},
	inline: {
		type: Boolean,
		default: false,
	},
	groupLabel: {
		type: String,
		default: "",
	},
});

const radiosProps = computed(() => {
	return {
		inline: props.inline,
		label: props.groupLabel,
		color: props.color,
	};
});

const radios = ref(null);
</script>

<style>
.baran-radio .v-field--variant-outlined {
	border-color: var(--bordercolor);
}
.baran-radio .v-field--variant-outlined.v-field--focused .v-field__outline {
	color: var(--primary) !important;
}
</style>
