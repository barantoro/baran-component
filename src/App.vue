<template>
  <v-app>
    <v-main>
      <v-container>
        <BButton 
          @click="handleClick"
        > Click Me </BButton>
        <br><br>
        <BComboBox 
          :items="comboItems" 
          label="Select an Item"
        >
          <!-- <template v-slot:selectionContent="{ data }" v-if="customSlot">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :disabled="data.disabled"
              :model-value="data.selected"
              size="small"
              @click:close="data.parent.selectItem(data.item)"
            >
              <template v-slot:prepend>
                <v-avatar
                  class="bg-accent text-uppercase"
                  start
                >{{ data.item.title.slice(0, 1) }}</v-avatar>
              </template>
              {{ data.item.title }}
            </v-chip>
          </template> !-->
        </BComboBox>

        <BTextBox 
          label="Enter Text" 
          v-model="textValue"
          :rules="rules"
        ></BTextBox>

        <BTable 
          :headers="tableHeaders" 
          :items="tableItems"
          :showSelect="true"
          v-model:selected="selectedTableItems"
          v-model:sortBy="sortBy"
        ></BTable>

        <BCheckbox 
          label="Check Me" 
          v-model:checked="isChecked"
          color="red"
        ></BCheckbox>


       
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, watch } from 'vue'
import BButton from './components/BButton.vue'
import BComboBox from './components/BComboBox.vue'
import BTextBox from './components/BTextBox.vue'
import BTable from './components/BTable.vue'
import BCheckbox from './components/BCheckbox.vue'

const comboItems = ['Vue', 'React', 'Angular', 'Svelte']
const textValue = ref('')
// const tableHeaders = [
//   { text: 'Name', value: 'name' },
//   { text: 'Age', value: 'age' },
// ]
// const tableItems = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
// ]
const tableItems = ref([
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: 16,
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: 0,
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: 2,
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: 45,
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: 22,
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: 16,
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: 0,
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: 2,
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: 45,
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: 22,
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
])
const tableHeaders = ref([
  {
    align: 'start',
    key: 'name',
    sortable: false,
    title: 'Dessert (100g serving)',
  },
  { key: 'calories', title: 'Calories' },
  { key: 'fat', title: 'Fat (g)' },
  { key: 'carbs', title: 'Carbs (g)' },
  { key: 'protein', title: 'Protein (g)' },
  { key: 'iron', title: 'Iron (%)' },
])
const isChecked = ref(false)

const customSlot = ref(false)

const rules = ref([
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
])

const selectedTableItems = ref([])

function handleClick() {
  alert('Button clicked!')
}

const sortBy = ref([
  { key: 'calories', order: 'asc' }
  // [{ key: 'calories', order: 'asc' }, { key: 'fat', order: 'desc' }]
])
</script>

