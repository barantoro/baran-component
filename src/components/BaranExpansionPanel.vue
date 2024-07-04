<template>
	<v-expansion-panels
		v-bind="expansionPanelProps"
		class="baran-expension-panels"
	>
		<v-expansion-panel
			v-for="item in items"
			:key="item"
			:title="item.title"
			:text="item.text"
		>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
	items: {
		type: Array,
		default: () => [
			{
				title: "Item 1",
				text: "In iaculis facilisis eros eu vestibulum. Integer mattis vehicula nisl, ac tempus neque faucibus porta. Pellentesque ut diam odio. ",
			},
			{
				title: "Item 2",
				text: "Nullam lacinia eget enim vitae varius. In sit amet tempor velit. Fusce cursus, dolor quis congue efficitur, metus felis consequat libero, nec fringilla lacus massa a enim.",
			},
		],
	},
	variant: {
		type: String,
		default: "default",
	},
	rounded: {
		type: String,
		default: "xs",
	}
});

const expansionPanelProps = computed(() => {
	const variantOptions = ["default", "accordion", "inset", "popout"];

	return {
		...props,
		variant: variantOptions.includes(props.variant) ? props.variant : undefined,
	};
});
</script>

<style>
.baran-expension-panels .v-expansion-panel-title {
	color: var(--title);
}
.baran-expension-panels .v-expansion-panel-title--active {
	color: var(--primary);
	font-weight: 600;
}
.baran-expension-panels .v-expansion-panel-text {
	color: var(--text);
}
</style>
