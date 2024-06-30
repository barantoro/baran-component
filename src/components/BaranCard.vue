<template>
	<v-card class="baran-card-wrapper" v-bind="cardProps">
		<slot name="prepend"></slot>
		<slot></slot>
		<slot name="append"></slot>
		<v-card-actions v-if="showButton">
			<v-btn
				v-bind="btnProps"
				:style="{ background: props.buttonBackground }"
				@click="handleClick"
			>
				{{ buttonText }}
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
	text: {
		type: String,
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et sodales quam, quis viverra arcu. Phasellus nunc magna, imperdiet eu malesuada lacinia, imperdiet vel leo. Fusce sed accumsan quam.",
	},
	buttonText: {
		type: String,
		default: "Click",
	},
	buttonBackground: {
		type: String,
		default: "#7367f0",
	},
	buttonColor: {
		type: String,
		default: "#fff",
	},
	showButton: {
		type: Boolean,
		default: true,
	},
	title: {
		type: String,
		default: "Title",
	},
	target: {
		type: String,
		default: "_blank",
	},
	subtitle: {
		type: String,
		default: "",
	},
	variant: {
		type: String,
		default: "",
	},
	loading: {
		type: Boolean,
		default: false,
	},
	hover: {
		type: Boolean,
		default: false,
	},
	href: {
		type: String,
		default: "",
	},
	rounded: {
		type: String,
		default: "xs",
	},
	elevation: {
		type: Number,
		default: 2,
	},
	image: {
		type: String,
		default: "",
	},
	color: {
		type: String,
		default: "",
	},
	disabled: {
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
	density: {
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

const cardProps = computed(() => {
	// I collected all the props here to increase readability.
	const variantOptions = [
		"outlined",
		"tonal",
		"elevated",
		"flat",
		"text",
		"plain",
	];
	const densityOptions = ["comfortable", "compact"];

	return {
		text: props.text,
		title: props.title.length > 0 ? props.title : undefined,
		subtitle: props.subtitle.length > 0 ? props.subtitle : undefined,
		color: props.color,
		hover: props.hover,
		href: props.href.length > 0 ? props.href : undefined,
		target: props.target,
		"prepend-icon": props.prependIcon,
		"append-icon": props.appendIcon,
		disabled: props.disabled,
		variant: variantOptions.includes(props.variant)
			? props.variant
			: undefined,
		image: props.image,
		density: densityOptions.includes(props.density)
			? props.density
			: undefined,
		class: props.class,
		rounded: props.rounded,
		elevation: props.elevation,
		loading: props.loading,
		width: props.width,
		"max-width": props.maxWidth,
		"min-width": props.minWidth,
		height: props.height,
		"max-height": props.maxHeight,
		"min-height": props.minHeight,
	};
});

const btnProps = computed(() => {
	return {
		buttonText: props.buttonText,
		color: props.buttonColor,
	};
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	emit("click", event);
};
</script>

<style>
.baran-card-wrapper .v-card-actions {
	justify-content: flex-end;
	padding: 0.625rem 1rem;
}
.baran-card-wrapper .v-card-title {
	color: var(--title);
}
.baran-card-wrapper .v-card-text {
	color: var(--text);
}
</style>
