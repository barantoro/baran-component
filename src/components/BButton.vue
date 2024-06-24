<template>
  <!-- 
    Button element is conditionally rendered using v-if.
    All button props are listed together for better readability:
    - v-if="icon": Determines whether the single icon or prepend/append icon.
    - :v-bind="btnProps": All vuetify props and more.
  -->
  <v-btn  
    v-if="icon"
    v-bind="btnProps"
    @click="handleClick"
  >
  </v-btn>

  <v-btn  
    v-else
    v-bind="btnProps"
    @click="handleClick"
  >
    <template v-if="prependIcon" v-slot:prepend>
      <v-icon :color="iconColor">{{ prependIcon }}</v-icon>
    </template>
    <slot></slot>
    <template v-if="appendIcon" v-slot:append>
      <v-icon :color="iconColor">{{ appendIcon }}</v-icon>
    </template>
  </v-btn>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  variant: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  prependIcon: {
    type: String,
    default: ''
  },
  appendIcon: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  density: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'default'
  },
  block: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: String,
    default: '0'
  },
  elevation: {
    type: Number,
    default: 2
  },
  ripple: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  },
  iconColor: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  maxWidth: {
    type: String,
    default: ''
  },
  minWidth: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  maxHeight: {
    type: String,
    default: ''
  },
  minHeight: {
    type: String,
    default: '' 
  },
})

const emit = defineEmits(['click'])

const btnProps = computed(() => {
  // I rendered the HTML element with v-if because of single icon feature, and I collected all the props here to increase readability.
  const variantOptions = ['outlined', 'tonal', 'text', 'plain']
  const densityOptions = ['comfortable', 'compact']

  return {
    color: props.color ,
    disabled: props.disabled,
    variant: variantOptions.includes(props.variant) ? props.variant : undefined,
    icon: props.icon.length > 0 ? props.icon : undefined,
    density: densityOptions.includes(props.density) ? props.density : undefined,
    customClass: props.customClass,
    size: props.size,
    block: props.block,
    rounded: props.rounded,
    elevation: props.elevation,
    ripple: props.ripple,
    loading: props.loading,
    width: props.width,
    'max-width': props.maxWidth,
    'min-width': props.minWidth,
    height: props.height,
    'max-height': props.maxHeight,
    'min-height': props.minHeight,
  }
})

function handleClick(event) {
  emit('click', event)
}
</script>
