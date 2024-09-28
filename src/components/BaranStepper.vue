<template>
    <v-stepper v-bind="stepperProps">
        <template v-for="slot in slotNames" v-slot:[slot] :key="slot">
            <slot :name="slot"></slot>
        </template>
    </v-stepper>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({});

const stepperProps = computed(() => {
	return {
		...props,
	};
});

const slots = useSlots();

const slotNames = computed(() => Object.keys(slots));
</script>
