<template>
  <v-checkbox 
    v-model="checked"
    :label="label"
    :color="color"
    :disabled="disabled"
  ></v-checkbox>
</template>

<script setup>
import { ref, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Check me',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:checked'])
const checked = ref(props.checked)

watch(checked, (newValue) => {
  emit('update:checked', newValue)
})
</script>
