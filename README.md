# Baran Component Library

A Vue 3 component library built with Vite and Vuetify.

## Introduction

**Baran Component** is a collection of reusable Vue 3 components, styled with Vuetify, and optimized for performance using Vite. This library aims to provide a set of commonly used components to speed up the development process of your Vue.js applications.

## ❗️ Important Links

- 📄 [Docs](#)

## 💿 Install

Set up your project using NPM. Use the corresponding command to install the dependencies:

| Package Manager                                                | Command        |
|---------------------------------------------------------------|----------------|
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install)     | `npm install baran-component`  |

<!-- ## ✨ Features

- 🖼️ **Optimized Front-End Stack**: Leverage the latest Vue 3 and Vuetify 3 for a modern, reactive UI development experience. [Vue 3](https://v3.vuejs.org/) | [Vuetify 3](https://vuetifyjs.com/en/)
- 🗃️ **State Management**: Integrated with [Pinia](https://pinia.vuejs.org/), the intuitive, modular state management solution for Vue.
- 🚦 **Routing and Layouts**: Utilizes Vue Router for SPA navigation and vite-plugin-vue-layouts for organizing Vue file layouts. [Vue Router](https://router.vuejs.org/) | [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
- ⚡ **Next-Gen Tooling**: Powered by Vite, experience fast cold starts and instant HMR (Hot Module Replacement). [Vite](https://vitejs.dev/)
- 🧩 **Automated Component Importing**: Streamline your workflow with unplugin-vue-components, automatically importing components as you use them. [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

These features are curated to provide a seamless development experience from setup to deployment, ensuring that your Vuetify application is both powerful and maintainable. -->

## 💡 Usage

## TextField Component

The `BTextBox` component is a customizable text field with various props for configuration.

### Props

| Prop            | Type            | Default         | Description                                                                 |
| --------------- | --------------- | --------------- | --------------------------------------------------------------------------- |
| `label`         | String          | `Enter text`    | The label of the text field.                                                |
| `value`         | [String, Number]| `''`            | The value of the text field.                                                |
| `variant`       | String          | `''`            | The variant of the text field (`outlined`, `underlined`, `solo`, etc.).     |
| `prependIcon`   | String          | `''`            | The icon to prepend inside the text field.                                  |
| `appendIcon`    | String          | `''`            | The icon to append inside the text field.                                   |
| `appendInnerIcon`| String          | `''`            | The icon to append inside the text field (inner).                           |
| `clearable`     | Boolean         | `false`         | Whether the text field is clearable.                                        |
| `type`          | String          | `text`          | The type of the input (text, password, etc.).                               |
| `placeholder`   | String          | `''`            | The placeholder text.                                                       |
| `hint`          | String          | `''`            | The hint text.                                                              |
| `persistentHint`| Boolean         | `false`         | Whether the hint text is persistent.                                        |
| `disabled`      | Boolean         | `false`         | Whether the text field is disabled.                                         |
| `readonly`      | Boolean         | `false`         | Whether the text field is read-only.                                        |
| `rules`         | Array           | `[]`            | Validation rules for the text field.                                        |
| `prefix`        | String          | `''`            | The prefix text.                                                            |
| `suffix`        | String          | `''`            | The suffix text.                                                            |
| `maxlength`     | [String, Number]| `''`            | The maximum length of the input.                                            |
| `counter`       | Boolean         | `false`         | Whether to show the character counter.                                      |
| `singleLine`    | Boolean         | `false`         | Whether the text field is single-line.                                      |

### Events

| Event          | Description                                   |
| -------------- | --------------------------------------------- |
| `@update:value`| Event emitted when the value changes.         |

### Example Usage

```vue
<template>
  <BTextBox
    :label="'Username'"
    :value="username"
    :variant="'outlined'"
    :prepend-icon="'mdi-account'"
    :append-icon="'mdi-check'"
    :clearable="true"
    :type="'text'"
    :placeholder="'Enter your username'"
    :hint="'This is your unique username'"
    :persistent-hint="true"
    :disabled="false"
    :readonly="false"
    :rules="[v => !!v || 'Username is required']"
    :prefix="'@'"
    :suffix="'.com'"
    :maxlength="20"
    :counter="true"
    :single-line="false"
    @update:value="onUsernameUpdate"
  />
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');

const onUsernameUpdate = (newValue) => {
  username.value = newValue;
};
</script>
```

### Button Component

The `BButton` component is a customizable button with various props and events. Extended from Vuetify.

#### Props

| Prop          | Type    | Default   | Description                                                                 |
| ------------- | ------- | --------- | --------------------------------------------------------------------------- |
| `color`       | String  | `primary` | The color of the button (e.g., `primary`, `secondary`).                     |
| `disabled`    | Boolean | `false`   | Whether the button is disabled.                                             |
| `variant`     | String  | `''` | The variant of the button (`outlined`, `tonal`, `text`, `plain`).           |
| `icon`        | String  | `''` | The icon for a single icon button, using MDI icons.                         |
| `prependIcon` | String  | `''` | The icon to prepend to the button text, using MDI icons.                    |
| `appendIcon`  | String  | `''` | The icon to append to the button text, using MDI icons.                     |
| `customClass` | String  | `''` | Custom CSS class for the button wrapper.                                    |
| `density`     | String  | `''` | The density of the button ('default', `comfortable`, `compact`).            |
| `size`        | String  | `medium` | The size of the button (`x-small`, `small`, `medium`, `large`, `x-large`).                        |
| `block`       | Boolean | `false`   | Whether the button should take the full width of its container.             |
| `rounded`     | String  | `0`       | The border radius of the button (e.g., `0`, `xs`, `sm`, `md`, `lg`, `xl`).        |
| `elevation`   | Number  | `2`       | The elevation (shadow) level of the button.                                 |
| `ripple`      | Boolean | `true`    | Whether the button has a ripple effect when clicked.                        |
| `loading`     | Boolean | `false`   | Whether the button shows a loading indicator.                               |
| `iconColor`   | String  | `''` | The color of the icon.                                                      |
| `width`       | String  | `''` | The width of the button.                                                    |
| `maxWidth`    | String  | `''` | The maximum width of the button.                                            |
| `minWidth`    | String  | `''` | The minimum width of the button.                                            |
| `height`      | String  | `''` | The height of the button.                                                   |
| `maxHeight`   | String  | `''` | The maximum height of the button.                                           |
| `minHeight`   | String  | `''` | The minimum height of the button.                                           |

#### Events

| Event    | Description                           |
| -------- | ------------------------------------- |
| `@click` | Event emitted when the button is clicked |

#### Example Usage

```vue
<template>
    <BButton
      @click="onClick"
      elevation="4"
      color="#1814F3"
      class="mt-1"
      :disabled="!terms"
    >
      Add Card
    </BButton>
</template>

<script setup>
import { ref } from 'vue'
const terms = ref(false)
function onClick() {
    alert('Button clicked!');
},
</script>
```

## Checkbox Component

The `MyCheckbox` component is a customizable checkbox with various props and events.

### Props

| Prop       | Type    | Default    | Description                        |
| ---------- | ------- | ---------- | ---------------------------------- |
| `label`    | String  | `Check me` | The label displayed next to the checkbox. |
| `checked`  | Boolean | `false`    | Whether the checkbox is checked.   |
| `color`    | String  | `''`       | The color of the checkbox.         |
| `disabled` | Boolean | `false`    | Whether the checkbox is disabled.  |

### Events

| Event             | Description                                 |
| ----------------- | ------------------------------------------- |
| `@update:checked` | Event emitted when the checked state changes. |

### Example Usage

```vue
<template>
  <BCheckBox
    v-model:checked="isChecked"
    label="Accept Terms"
    color="primary"
    :disabled="isDisabled"
  />
</template>

<script setup>
import { ref } from 'vue';
import BCheckBox from 'my-component-library/BCheckBox.vue';

const isChecked = ref(false);
const isDisabled = ref(false);
</script>
```

## Combobox Component

The `BComboBox` component is a customizable combobox with various props and events.

### Props

| Prop            | Type    | Default           | Description                                                                 |
| --------------- | ------- | ----------------- | --------------------------------------------------------------------------- |
| `items`         | Array   | `[]`              | The items to display in the combobox.                                       |
| `label`         | String  | `Select an item`  | The label for the combobox.                                                 |
| `multiple`      | Boolean | `false`           | Whether multiple items can be selected.                                     |
| `chips`         | Boolean | `false`           | Whether selected items are displayed as chips.                              |
| `readonly`      | Boolean | `false`           | Whether the combobox is read-only.                                          |
| `customSlot`    | Boolean | `false`           | Whether to use a custom slot for the selected items.                        |
| `hint`          | String  | `''`              | The hint text to display below the combobox.                                |
| `noData`        | Boolean | `false`           | Whether to show a 'no data' message when there are no items.                |
| `hideSelected`  | Boolean | `false`           | Whether to hide the selected items from the list.                           |
| `density`       | String  | `''`              | The density of the combobox (`comfortable`, `compact`).                     |
| `variant`       | String  | `''`              | The variant of the combobox (`outlined`, `underlined`, `solo`, `solo-filled`, `solo-inverted`).       |
| `customClass`   | String  | `''`              | Custom CSS class for the combobox wrapper.                                  |
| `persistentHint`| Boolean | `false`           | Whether the hint text should always be visible.                             |

### Example Usage

```vue
<template>
  <BComboBox
    :items="items"
    label="Choose an option"
    :multiple="true"
    :chips="true"
  >
  </BComboBox>
</template>

<script setup>
import { ref } from 'vue';

const selectedItem = ref(null);
const items = ref(['Option 1', 'Option 2', 'Option 3']);
</script>
```

## DataTable Component

The `BTable` component is a customizable data table with an optional search bar and various props and events.

### Props

| Prop              | Type    | Default       | Description                                                                |
| ----------------- | ------- | ------------- | -------------------------------------------------------------------------- |
| `headers`         | Array   | `[]`          | The headers of the data table.                                             |
| `items`           | Array   | `[]`          | The items to display in the data table.                                    |
| `theme`           | String  | `light`       | The theme of the data table.                                               |
| `density`         | String  | `''`          | The density of the data table (`comfortable`, `compact`).                  |
| `height`          | String  | `''`          | The height of the data table.                                              |
| `fixedHeader`     | Boolean | `false`       | Whether the header is fixed.                                               |
| `itemsPerPage`    | Number  | `5`           | The number of items per page.                                              |
| `searchPrependIcon` | String  | `mdi-magnify` | The icon to prepend inside the search bar.                                 |
| `searchLabel`     | String  | `Search`      | The label for the search bar.                                              |
| `variant`         | String  | `outlined`    | The variant of the search bar (`outlined`, `underlined`, `solo`, `solo-filled`, `solo-inverted`).    |
| `searchBar`       | Boolean | `true`        | Whether to show the search bar.                                            |
| `showSelect`      | Boolean | `false`       | Whether to show checkboxes for row selection.                              |
| `itemValue`       | String  | `''`          | The property to use as the unique identifier for items.                    |
| `selected`        | Array   | `[]`          | The selected items.                                                        |
| `selectableKey`   | String  | `''`          | The property that determines whether an item is selectable.                |
| `selectStrategy`  | String  | `''`          | The strategy for selecting items.                                          |
| `sortBy`          | Array   | `[]`          | The current sort order.                                                    |
| `multiSort`       | Boolean | `false`       | Whether multiple columns can be sorted.                                    |

### Events

| Event             | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `@update:selected`| Event emitted when the selection changes.             |
| `@update:sortBy`  | Event emitted when the sort order changes.            |

### Example Usage

```vue
<template>
  <BTable
    :headers="tableHeaders" 
    :items="tableItems"
    :showSelect="true"
    v-model:selected="selectedItems"
    v-model:sortBy="sortOrder"
  />
</template>

<script setup>
import { ref } from 'vue';

const tableHeaders = ref([
  { text: 'Name', value: 'name' },
  { text: 'Age', value: 'age' },
  { text: 'Country', value: 'country' }
]);

const tableItems = ref([
  { id: 1, name: 'John Doe', age: 30, country: 'USA' },
  { id: 2, name: 'Jane Smith', age: 25, country: 'Canada' }
]);

const selectedItems = ref([]);
const sortOrder = ref([{ key: 'name', order: 'asc' }]);

</script>
```