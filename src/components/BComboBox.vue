<template>
  <v-combobox 
    v-model="selectedItem" 
    v-model:search="search"
    v-bind="computedProps"
    :items="items" 
    :label="label" 
    :multiple="multiple"
    :chips="chips"
    :readonly="readonly"
    :hint="hint"
    :persistent-hint="persistentHint"
    :hide-selected="hideSelected"
    :hide-no-data="!noData"
    :class="customClass"
  >
    <template v-slot:selection="data" v-if="customSlot">
      <slot name="selectionContent" :data="data"></slot>
    </template>
    <template v-slot:no-data v-if="noData">
      <v-list-item>
        <v-list-item-title>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: 'Select an item',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  chips: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  customSlot: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String, 
    default: ''
  },
  noData: {
    type: Boolean,
    default: false
  },
  hideSelected: {
    type: Boolean,
    default: false
  },
  density: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
  persistentHint: {
    type: Boolean,
    default: false
  }
})

const selectedItem = ref(null)
const search = ref(null)

const computedProps = computed(() => {
  const variantOptions = ['outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted']
  const densityOptions = ['comfortable', 'compact']

  return {
    variant: variantOptions.includes(props.variant) ? props.variant : undefined,
    density: densityOptions.includes(props.density) ? props.density : undefined,
  }
})
</script>
