<template>
  <v-text-field
    v-if="searchBar"
    v-model="search"
    v-bind="computedProps"
    :label="searchLabel"
    :prepend-inner-icon="searchPrependIcon"
    hide-details
    single-line
  ></v-text-field>
  
  <v-data-table
    v-model:items="selected"
    v-bind="computedProps"
    :headers="headers"
    :items="items"
    :search="search"
    :items-per-page="itemsPerPage"
    :show-select="showSelect"
    :item-value="itemValue"
    :theme="theme"
    :height="height"
    :fixed-header="fixedHeader"
    return-object
    :item-selectable="selectableKey"
    :select-strategy="selectStrategy"
    :sort-by="internalSortBy"
    :multi-sort="multiSort"
    @update:sort-by="updateSortBy"
  ></v-data-table>
</template>

<script setup>
import { defineEmits, defineProps, computed, ref, watch } from 'vue'

const props = defineProps({
  headers: {
    type: Array, 
    default: () => []
  },
  items: {
    type: Array, 
    default: () => []
  },
  theme: {
    type: String,
    default: 'light'
  },
  density: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: ''
  },
  fixedHeader: {
    type: Boolean,
    default: false
  },
  itemsPerPage: {
    type: Number,
    default: 5
  },
  searchPrependIcon: {
    type: String,
    default: 'mdi-magnify'
  },
  searchLabel: {
    type: String,
    default: 'Search'
  },
  variant: {
    type: String,
    default: 'outlined'
  },
  searchBar: {
    type: Boolean,
    default: true
  },
  showSelect: {
    type: Boolean,
    default: false
  },
  itemValue: {
    type: String,
    default: ''
  },
  selected: {
    type: Array,
    default: () => []
  },
  selectableKey: {
    type: String,
    default: ''
  },
  selectStrategy: {
    type: String,
    default: ''
  },
  sortBy: {
    type: Array,
    default: () => []
  },
  multiSort: {
    type: Boolean,
    default: false
  },
})

const search = ref(null)
const selected = ref(props.selected)
const internalSortBy = ref(props.sortBy)

const emit = defineEmits(['update:selected', 'update:sortBy'])

const computedProps = computed(() => {
  const densityOptions = ['comfortable', 'compact']
  const variantOptions = ['outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted']

  return {
    density: densityOptions.includes(props.density) ? props.density : undefined,
    variant: variantOptions.includes(props.variant) ? props.variant : undefined,
  }
})

watch(selected, (newValue) => {
  emit('update:selected', newValue)
})

watch(() => props.sortBy, (newVal) => {
  internalSortBy.value = newVal
})

const updateSortBy = (newVal) => {
  emit('update:sortBy', newVal)
}
</script>
