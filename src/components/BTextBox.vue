<template>
  <v-text-field 
    v-model="internalValue" 
    v-bind="computedProps"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :hint="hint"
    :disabled="disabled"
    :readonly="readonly"
    :rules="rules"
    :persistent-hint="persistentHint"
    :prefix="prefix"
    :suffix="suffix"
    :maxlength="maxlength"
    :counter="counter"
    :single-line="singleLine"
    :prependIcon="props.prependIcon"
    :appendIcon="props.appendIcon"
    :appendInnerIcon="props.appendInnerIcon"
    :clearable="props.clearable"
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
import { ref, watch, computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Enter text',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
  prependIcon: {
    type: String,
    default: '',
  },
  appendIcon: {
    type: String,
    default: '',
  },
  appendInnerIcon: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
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
    default: '',
  },
  suffix: {
    type: String,
    default: '',
  },
  maxlength: {
    type: [String, Number],
    default: '',
  },
  counter: {
    type: Boolean,
    default: false,
  },
  singleLine: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:value'])
const internalValue = ref(props.value)

watch(internalValue, (newValue) => {
  emit('update:value', newValue)
})

watch(() => props.value, (newValue) => {
  internalValue.value = newValue
})

const computedProps = computed(() => {
  const variantOptions = ['outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted', 'plain']

  return {
    variant: variantOptions.includes(props.variant) ? props.variant : undefined,
  }
})
</script>

<style scoped>
/* input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
} */
</style>