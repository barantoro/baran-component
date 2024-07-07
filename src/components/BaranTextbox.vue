<template>
	<v-text-field v-bind="computedProps" class="baran-textbox" v-money="money">
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
import { defineProps, computed, watch, ref } from "vue";
import { VMoney } from 'v-money'

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
	moneyCurrency: {
		type: String,
		default: ''
	},
	money: {
		type: Object,
		default: () => {}
	}
});

const money = ref(props.money);
 
watch(() => props.moneyCurrency, (newVal) => {
	if (newVal === 'EUR') {
    	money.value = {
			decimal: ',',
			thousands: '.',
			prefix: '€ ',
			suffix: '',
			precision: 2,
			masked: false
      	};
    } else if (newVal === 'TRY') {
		money.value = {
			decimal: ',',
			thousands: '.',
			prefix: '₺ ',
			suffix: '',
			precision: 2,
			masked: false
		};
    } else if (newVal === 'USD') {
      money.value = {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        suffix: '',
        precision: 2,
        masked: false
      };
    } else if (newVal === 'GBP') {
		money.value = {
			decimal: '.',
			thousands: ',',
			prefix: '£ ',
			suffix: '',
			precision: 2,
			masked: false
		};
    } else {
		money.value = undefined
    }
  },
  { immediate: true } // Runs watcher at first
);

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
