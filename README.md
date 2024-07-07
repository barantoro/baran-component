# Baran Component Library

A Vue 3 component library built with Vite and Vuetify.

## Introduction

**Baran Component** is a collection of reusable Vue 3 components, styled with Vuetify, and optimized for performance using Vite. This library aims to provide a set of commonly used components to speed up the development process of your Vue.js applications.

## ❗️ Important Links

-   📄 [Docs](https://www.npmjs.com/package/baran-component#readme)

## 💿 Install

Before you can use this project, make sure you have the following prerequisites installed:

-   [Vue.js](https://vuejs.org/)
-   [Vuetify](https://vuetifyjs.com/)

Set up your project using NPM. Use the corresponding command to install the dependencies:

| Package Manager                                           | Command                       |
| --------------------------------------------------------- | ----------------------------- |
| [npm](https://docs.npmjs.com/cli/v7/commands/npm-install) | `npm install baran-component` |

## 💡 Usage

After successfully installing dependencies, register component globally.

```
import vuetify from './vuetify' import BaranComponent from 'baran-component'
import 'baran-component/dist/style.css'

export function registerPlugins (app) {
	app.use(vuetify) app.use(BaranComponent)
}
```

## Button Component

The `BaranButton` component is a customizable button with various props and events. Extended from Vuetify.

#### Props

| Prop          | Type    | Default   | Description                                                                |
| ------------- | ------- | --------- | -------------------------------------------------------------------------- |
| `color`       | String  | `primary` | The color of the button (e.g., `primary`, `secondary`).                    |
| `disabled`    | Boolean | `false`   | Whether the button is disabled.                                            |
| `variant`     | String  | `''`      | The variant of the button (`outlined`, `tonal`, `text`, `plain`).          |
| `icon`        | String  | `''`      | The icon for a single icon button, using MDI icons.                        |
| `prependIcon` | String  | `''`      | The icon to prepend to the button text, using MDI icons.                   |
| `appendIcon`  | String  | `''`      | The icon to append to the button text, using MDI icons.                    |
| `density`     | String  | `''`      | The density of the button ('default', `comfortable`, `compact`).           |
| `size`        | String  | `medium`  | The size of the button (`x-small`, `small`, `medium`, `large`, `x-large`). |
| `block`       | Boolean | `false`   | Whether the button should take the full width of its container.            |
| `rounded`     | String  | `0`       | The border radius of the button (e.g., `0`, `xs`, `sm`, `md`, `lg`, `xl`). |
| `elevation`   | Number  | `2`       | The elevation (shadow) level of the button.                                |
| `ripple`      | Boolean | `true`    | Whether the button has a ripple effect when clicked.                       |
| `loading`     | Boolean | `false`   | Whether the button shows a loading indicator.                              |
| `width`       | String  | `''`      | The width of the button.                                                   |
| `maxWidth`    | String  | `''`      | The maximum width of the button.                                           |
| `minWidth`    | String  | `''`      | The minimum width of the button.                                           |
| `height`      | String  | `''`      | The height of the button.                                                  |
| `maxHeight`   | String  | `''`      | The maximum height of the button.                                          |
| `minHeight`   | String  | `''`      | The minimum height of the button.                                          |

#### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| ``        |                                  |
| `append`  | Slot for custom append content.  |
| `loader`  | Slot for custom loader content.  |

#### Events

| Event    | Description                              |
| -------- | ---------------------------------------- |
| `@click` | Event emitted when the button is clicked |

#### Example Usage

```vue
<template>
	<BaranButton @click="onClick" elevation="4" color="#1814F3" class="mt-1" :disabled="!terms"> Add Card </BaranButton>
</template>

<script setup>
import { ref } from 'vue'
const terms = ref(false)
function onClick() {
    alert('Button clicked!');
},
</script>
```

## Card Component

The `BaranCard` component is a versatile card component with a customizable button. It is built using Vuetify's card and button components and offers various customization options for appearance and behavior.

#### Props

| Prop             | Type    | Default | Description                                                                         |
| ---------------- | ------- | ------- | ----------------------------------------------------------------------------------- |
| text             | String  | ''      | The main text content of the card.                                                  |
| buttonText       | String  | Click   | The text displayed on the button.                                                   |
| buttonBackground | String  | #7367f0 | The background color of the button.                                                 |
| buttonColor      | String  | #fff    | The text color of the button.                                                       |
| showButton       | Boolean | false   | Whether to show the button.                                                         |
| title            | String  | ''      | The title of the card.                                                              |
| target           | String  | ''      | The target attribute for the link, if `href` is provided.                           |
| subtitle         | String  | ''      | The subtitle of the card.                                                           |
| variant          | String  | ''      | The variant of the card (`outlined`, `tonal`, `elevated`, `flat`, `text`, `plain`). |
| loading          | Boolean | false   | Whether the card shows a loading state.                                             |
| hover            | Boolean | false   | Whether the card has a hover effect.                                                |
| href             | String  | ''      | The link URL for the card.                                                          |
| rounded          | String  | xs      | The border radius of the card (e.g., `xs`, `sm`, `md`, `lg`, `xl`).                 |
| elevation        | Number  | 1       | The elevation (shadow) level of the card.                                           |
| image            | String  | ''      | The image URL for the card.                                                         |
| color            | String  | ''      | The color of the card.                                                              |
| disabled         | Boolean | false   | Whether the card is disabled.                                                       |
| prependIcon      | String  | ''      | The icon to prepend to the card content.                                            |
| appendIcon       | String  | ''      | The icon to append to the card content.                                             |
| density          | String  | ''      | The density of the card (`comfortable`, `compact`).                                 |
| width            | String  | ''      | The width of the card.                                                              |
| maxWidth         | String  | ''      | The maximum width of the card.                                                      |
| minWidth         | String  | ''      | The minimum width of the card.                                                      |
| height           | String  | ''      | The height of the card.                                                             |
| maxHeight        | String  | ''      | The maximum height of the card.                                                     |
| minHeight        | String  | ''      | The minimum height of the card                                                      |

#### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| ``        |                                  |
| `append`  | Slot for custom append content.  |
| `actions` | Slot for actions loader content. |

#### Events

| Event  | Description                               |
| ------ | ----------------------------------------- |
| @click | Event emitted when the button is clicked. |

#### Example Usage

```vue
<template>
	<BaranCard
		title="Card Title"
		subtitle="Card Subtitle"
		text="This is some example text content for the card."
		:show-button="true"
		button-text="Learn More"
		button-background="#ff5722"
		button-color="#ffffff"
		:hover="true"
		:elevation="4"
		href="https://example.com"
		target="_blank"
		class="my-custom-class"
		:rounded="'md'"
	>
		<template #prepend>
			<v-avatar size="56">
				<img src="https://example.com/avatar.jpg" alt="Avatar" />
			</v-avatar>
		</template>
		<template #append>
			<v-icon>mdi-heart</v-icon>
		</template>
	</BaranCard>
</template>

<script setup></script>
```

## Chip Component

The `BaranChips` component represents a small interactive element used to represent information such as tags, categories, or actions.

#### Props

| Prop        | Type    | Default   | Description                                                           |
| ----------- | ------- | --------- | --------------------------------------------------------------------- |
| title       | String  | 'Chip'    | The text content displayed within the chip.                           |
| color       | String  | '#7367f0' | The background color of the chip.                                     |
| elevation   | Number  | 0         | Elevation level of the chip.                                          |
| size        | String  | 'default' | Size of the chip (`small`, `default`, `large`).                       |
| variant     | String  | 'tonal'   | Visual variant of the chip (`outlined`, `elevated`, `text`, `plain`). |
| prependIcon | String  | ''        | Icon to prepend before the chip text.                                 |
| appendIcon  | String  | ''        | Icon to append after the chip text.                                   |
| closable    | Boolean | false     | If true, displays a close icon for removing the chip.                 |
| label       | Boolean | false     | If true, renders the chip as a label style.                           |
| disabled    | Boolean | false     | If true, disables interactions with the chip.                         |
| density     | String  | ''        | Density of the chip (`comfortable`, `compact`).                       |

#### Slots

| Slot Name | Description                      |
| --------- | -------------------------------- |
| `prepend` | Slot for custom prepend content. |
| `append`  | Slot for custom append content.  |

#### Events

| Event Name | Description                         | Payload    |
| ---------- | ----------------------------------- | ---------- |
| click      | Triggered when the chip is clicked. | MouseEvent |

#### Example Usage

```vue
<template>
	<BaranChips title="Example Chip" color="#ff9800" elevation="2" size="default" variant="outlined" prependIcon="mdi-check" appendIcon="mdi-close" closable label disabled class="custom-chip" density="compact" @click="handleChipClick">
		<template #prepend>
			<v-icon>mdi-tag</v-icon>
		</template>
	</BaranChips>
</template>

<script setup>
import Chip from "@/components/Chip.vue";

const handleChipClick = (event) => {
	console.log("Chip clicked!", event);
};
</script>

<style>
.custom-chip {
	font-size: 14px;
}
</style>
```

## Expansion Panels Component

The `BaranExpansionPanel` component allows for displaying collapsible panels with customizable options.

#### Props

| Prop      | Type    | Default   | Description                                                                        |
| --------- | ------- | --------- | ---------------------------------------------------------------------------------- |
| items     | Array   | See below | Array of objects defining each panel's title and text content.                     |
| variant   | String  | 'default' | Variant style of the expansion panels (`default`, `accordion`, `inset`, `popout`). |
| rounded   | String  | 'xs'      | Rounded corner size of the panels.                                                 |
| elevation | Number  | 1         | Elevation level of the panels.                                                     |
| readonly  | Boolean | false     | Whether the panels are readonly.                                                   |
| color     | String  | ''        | Color of the expansion panels.                                                     |
| disabled  | Boolean | false     | Whether the panels are disabled.                                                   |

#### Example Usage

```vue
<template>
	<BaranExpansionPanel :items="panelItems" variant="accordion" rounded="md" :elevation="3" :readonly="false" color="#7367f0" class="custom-expansion-panels" />
</template>

<script setup>
import { ref } from "vue";

const panelItems = ref([
	{
		title: "Panel 1",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		title: "Panel 2",
		text: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.",
	},
]);
</script>

<style>
.custom-expansion-panels .v-expansion-panel-title {
	color: var(--title);
}
.custom-expansion-panels .v-expansion-panel-title--active {
	color: var(--primary);
	font-weight: 600;
}
.custom-expansion-panels .v-expansion-panel-text {
	color: var(--text);
}
</style>
```

## Dialog Component

The `BaranDialog` component provides a dialog with an activator slot for flexibility in triggering the dialog.

#### Props

| Prop            | Type    | Default          | Description                                                   |
| --------------- | ------- | ---------------- | ------------------------------------------------------------- |
| title           | String  | 'Title'          | Title of the dialog.                                          |
| text            | String  | 'Lorem ipsum...' | Text content displayed within the dialog.                     |
| closeButtonText | String  | 'Close'          | Text for the close button inside the dialog.                  |
| rounded         | String  | 'xs'             | Rounded corner size of the dialog.                            |
| buttonText      | String  | 'Open Modal'     | Text displayed on the activator button triggering the dialog. |
| buttonColor     | String  | '#7367f0'        | Color of the activator button.                                |
| buttonElevation | Number  | 2                | Elevation level of the activator button.                      |
| persistent      | Boolean | false            | Whether the dialog persists after being closed.               |
| transition      | String  | ''               | Transition name for dialog animation.                         |
| scrollable      | Boolean | false            | Whether the dialog content is scrollable.                     |
| fullscreen      | Boolean | false            | Whether the dialog should occupy the full screen.             |
| width           | String  | ''               | Width of the dialog.                                          |
| maxWidth        | String  | ''               | Maximum width of the dialog.                                  |
| minWidth        | String  | ''               | Minimum width of the dialog.                                  |
| height          | String  | ''               | Height of the dialog.                                         |
| maxHeight       | String  | ''               | Maximum height of the dialog.                                 |
| minHeight       | String  | ''               | Minimum height of the dialog.                                 |
| buttonVariant   | String  | ''               | Variant style of the activator button.                        |
| buttonDisabled  | Boolean | false            | Whether the activator button is disabled.                     |
| buttonDensity   | String  | 'comfortable'    | Density of the activator button.                              |
| buttonClass     | String  | ''               | Custom CSS classes for the activator button.                  |
| buttonSize      | String  | 'default'        | Size of the activator button.                                 |
| buttonBlock     | Boolean | false            | Whether the activator button spans full width.                |
| buttonRounded   | String  | 'xs'             | Rounded corner size of the activator button.                  |
| buttonLoading   | Boolean | false            | Whether the activator button is in a loading state.           |
| buttonWidth     | String  | ''               | Width of the activator button.                                |
| buttonMaxWidth  | String  | ''               | Maximum width of the activator button.                        |
| buttonMinWidth  | String  | ''               | Minimum width of the activator button.                        |
| buttonHeight    | String  | ''               | Height of the activator button.                               |
| buttonMaxHeight | String  | ''               | Maximum height of the activator button.                       |
| buttonMinHeight | String  | ''               | Minimum height of the activator button.                       |

#### Slots

| Slot Name   | Description                                                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `activator` | Slot for replacing the default activator button. Provides props (`activatorProps`) to customize the activator button.               |
| `default`   | Slot for customizing the content inside the dialog. Receives the `isActive` prop indicating whether the dialog is currently active. |

#### Example Usage

```vue
<template>
	<BaranDialog width="auto" scrollable :title="dialogTitle" :text="dialogText">
		<template v-slot:activator="{ props: activatorProps }">
			<BaranButton color="brown" prepend-icon="mdi-earth" text="Custom Modal Activator" variant="outlined" v-bind="activatorProps"></BaranButton>
		</template>
	</BaranDialog>
</template>

<script setup>
const dialogTitle = "Example Dialog";
const dialogText = "This is an example of a dialog component with custom slots and props.";
</script>
```

## List Component

The `BaranList` component renders a list of items with optional sub-groups, allowing customization of each list item.

#### Props

| Prop          | Type    | Default       | Description                                                               |
| ------------- | ------- | ------------- | ------------------------------------------------------------------------- |
| lines         | String  | 'one'         | Number of lines for list items (one or two).                              |
| items         | Array   | []            | Array of items to render in the list.                                     |
| density       | String  | 'comfortable' | Density of the list items (comfortable or compact).                       |
| elevation     | Number  | 0             | Elevation level of the list.                                              |
| variant       | String  | ''            | Variant style of the list (outlined, tonal, elevated, flat, text, plain). |
| disabled      | Boolean | false         | Whether the list is disabled.                                             |
| listItemClass | String  | ''            | Custom CSS classes for each list item.                                    |
| width         | String  | ''            | Width of the list wrapper.                                                |
| maxWidth      | String  | ''            | Maximum width of the list wrapper.                                        |
| minWidth      | String  | ''            | Minimum width of the list wrapper.                                        |
| height        | String  | ''            | Height of the list wrapper.                                               |
| maxHeight     | String  | ''            | Maximum height of the list wrapper.                                       |
| minHeight     | String  | ''            | Minimum height of the list wrapper.                                       |

#### Example Usage

```vue
<template>
	<BaranList lines="two" :items="listItems" density="compact" elevation="3" variant="outlined" :disabled="false" class="custom-list" width="100%" :maxWidth="'800px'" :minHeight="'300px'">
		<template v-slot:list-item="{ item }">
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
				<v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
			</v-list-item-content>
		</template>
		<template v-slot:sub-item="{ item }">
			<v-list-item-content>
				<v-list-item-title>{{ item.title }}</v-list-item-title>
				<v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
			</v-list-item-content>
		</template>
	</BaranList>
</template>

<script setup>
const listItems = ref([
	{
		title: "Item 1",
		subtitle: "Description of Item 1",
	},
	{
		title: "Item 2",
		subtitle: "Description of Item 2",
		prependAvatar: "https://example.com/avatar.jpg",
	},
	{
		title: "Item 3",
		subtitle: "Description of Item 3",
		prependIcon: "mdi-account",
	},
	{
		title: "Item 4",
		subtitle: "Description of Item 4",
		appendIcon: "mdi-check",
	},
	{
		title: "Item 5",
		subtitle: "Description of Item 5",
		subItems: [
			{
				title: "Sub-item 1",
				subtitle: "Description of Sub-item 1",
				prependIcon: "mdi-subdirectory-arrow-right",
			},
			{
				title: "Sub-item 2",
				subtitle: "Description of Sub-item 2",
				prependIcon: "mdi-subdirectory-arrow-right",
			},
		],
	},
]);
</script>
```

## Tabs Component

The `BaranTabs` component is a customizable tab component with support for icons, dynamic tab content, and various styling options. It allows for flexible props, slots, and a simple API to manage the tabs.

#### Props

| Prop      | Type    | Default                                                                                                                                                  | Description                                                                                     |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| items     | Array   | `[{ id: 1, tabText: "1st Tab", tabContent: "Content for 1st Tab" }, { id: 2, tabText: "2nd Tab", tabContent: "Content for 2nd Tab", icon: "$vuetify" }]` | Array of tab items, each containing an `id`, `tabText`, `tabContent`, and optionally an `icon`. |
| bgColor   | String  | #7367f0                                                                                                                                                  | Background color for the tab component.                                                         |
| alignTabs | String  | start                                                                                                                                                    | Alignment of the tabs (start, center, end).                                                     |
| rounded   | String  | xs                                                                                                                                                       | Border radius for the tab component (xs, sm, md, lg, xl).                                       |
| elevation | Number  | 2                                                                                                                                                        | Elevation for the tab component (range from 0 to 24).                                           |
| density   | String  | comfortable                                                                                                                                              | Density of the tabs (comfortable, compact).                                                     |
| disabled  | Boolean | false                                                                                                                                                    | Whether the tabs are disabled.                                                                  |
| width     | String  |                                                                                                                                                          | The width of the tabs wrapper.                                                                  |
| maxWidth  | String  |                                                                                                                                                          | The maximum width of the tabs wrapper.                                                          |
| minWidth  | String  |                                                                                                                                                          | The minimum width of the tabs wrapper.                                                          |
| height    | String  |                                                                                                                                                          | The height of the tabs wrapper.                                                                 |
| maxHeight | String  |                                                                                                                                                          | The maximum height of the tabs wrapper.                                                         |
| minHeight | String  |                                                                                                                                                          | The minimum height of the tabs wrapper.                                                         |

#### Slots

| Slot Name         | Description                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| `tab-{id}`        | Slot for customizing the tab with the specific `id`. Receives `item` as a scoped slot prop.         |
| `tabContent-{id}` | Slot for customizing the tab content with the specific `id`. Receives `item` as a scoped slot prop. |

#### Example Usage

```vue
<template>
	<BaranTabs :items="tabs" bgColor="#4caf50" alignTabs="center" rounded="md" elevation="4" density="compact">
		<template #tab-1="{ item }">
			<span>Custom Tab Content for {{ item.tabText }}</span>
		</template>
		<template #tabContent-1="{ item }">
			<div>Custom Content for {{ item.tabContent }}</div>
		</template>
	</BaranTabs>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
	{ id: 1, tabText: "1st Tab", tabContent: "Content for 1st Tab" },
	{ id: 2, tabText: "2nd Tab", tabContent: "Content for 2nd Tab", icon: "$vuetify" },
]);
</script>
```

## Speed Dial Component

The `BaranSpeedDial` component provides a customizable speed dial menu with various items. Extended from Vuetify.

#### Props

| Prop     | Type   | Default              | Description                                                              |
| -------- | ------ | -------------------- | ------------------------------------------------------------------------ |
| items    | Array  | See Example          | An array of objects, each representing an item in the speed dial menu.   |
| position | Array  | ['bottom', 'center'] | The position of the speed dial menu (horizontal and vertical alignment). |
| icon     | String | 'mdi-translate'      | The icon for the speed dial activator button.                            |
| color    | String | '#7367f0'            | The color of the speed dial activator button.                            |
| variant  | String | 'tonal'              | The variant style of the activator button.                               |
| density  | String | 'comfortable'        | The density of the activator button.                                     |

#### Slots

| Slot Name   | Description                                |
| ----------- | ------------------------------------------ |
| `activator` | Slot for customizing the activator button. |

#### Events

The `BaranSpeedDial` component emits a 'click' event when any item in the speed dial menu is clicked. The clicked item object is passed as the event payload.

#### Example Usage

```vue
<template>
	<BaranSpeedDial :items="speedDialItems" :position="['bottom', 'center']" icon="mdi-plus" color="#42b983" @click="handleSpeedDialClick">
		<template v-slot:activator="{ props }">
			<!-- Custom activator button -->
			<v-btn v-bind="{ ...props, color: 'secondary', dark: true }"> Custom Activator </v-btn>
		</template>
	</BaranSpeedDial>
</template>

<script setup>
import { ref } from "vue";
import BaranSpeedDial from "./components/BaranSpeedDial.vue";

const speedDialItems = ref([
	{
		icon: "mdi-pencil",
		variant: "tonal",
		color: "#7367f0",
		onClick: () => console.log("Edit clicked"),
	},
	{
		icon: "mdi-delete",
		variant: "tonal",
		color: "#f04e54",
		onClick: () => console.log("Delete clicked"),
	},
]);

const handleSpeedDialClick = (item) => {
	console.log("Clicked item:", item);
};
</script>
```

## Textbox Component

The `BaranTextbox` component is a customizable text field component with various props, computed properties, and reactive data bindings. This component leverages Vuetify's `v-text-field` and offers additional flexibility through props and slots.

#### Props

| Prop              | Type             | Default          | Description                                                                   |
| ----------------- | ---------------- | ---------------- | ----------------------------------------------------------------------------- |
| `label`           | String           | 'Text'           | The label of the text field.                                                  |
| `value`           | [String, Number] | ''               | The value of the text field.                                                  |
| `variant`         | String           | 'outlined'       | The variant of the text field (e.g., outlined, underlined, solo, etc.).       |
| `density`         | String           | 'compact'        | The density of the text field (e.g., comfortable, compact).                   |
| `prependIcon`     | String           | ''               | The icon to prepend to the text field.                                        |
| `appendIcon`      | String           | ''               | The icon to append to the text field.                                         |
| `appendInnerIcon` | String           | ''               | The inner icon to append to the text field.                                   |
| `clearable`       | Boolean          | false            | Whether the text field is clearable.                                          |
| `type`            | String           | 'text'           | The type of the input (e.g., text, password, email).                          |
| `placeholder`     | String           | 'Type something' | The placeholder text.                                                         |
| `hint`            | String           | ''               | Hint text to display.                                                         |
| `persistentHint`  | Boolean          | false            | Whether the hint text should always be visible.                               |
| `disabled`        | Boolean          | false            | Whether the text field is disabled.                                           |
| `readonly`        | Boolean          | false            | Whether the text field is read-only.                                          |
| `rules`           | Array            | `[]`             | Array of validation rules.                                                    |
| `prefix`          | String           | ''               | Prefix text to display inside the text field.                                 |
| `suffix`          | String           | ''               | Suffix text to display inside the text field.                                 |
| `maxlength`       | [String, Number] | ''               | Maximum length of the input.                                                  |
| `counter`         | Boolean          | false            | Whether to display the character counter.                                     |
| `singleLine`      | Boolean          | false            | Whether the text field is single-line.                                        |
| `money`           | Object           | `{}`             | Input mask rules.                                                             |
| `moneyCurrency`   | String           | ''               | Pre-defined input mask rules for money currencies. `EUR`, `TRY`, `USD`, `GBP` |

#### Slots

| Slot Name       | Description                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------- |
| `prepend-inner` | Slot for customizing the inner prepend-inner icon.                                              |
| `prepend`       | Slot for customizing the prepend icon.                                                          |
| `append`        | Slot for customizing the appended icon.                                                         |
| `append-inner`  | Slot for customizing the inner appended-inner icon.                                             |
| `details`       | Slot for customizing the details. Used for displaying messages, hint, error-messages, and more. |
| `label`         | Slot for customizing the label.                                                                 |

#### Example Usage

```vue
<template>
	<BaranTextbox v-model="inputValue" label="Enter your name" variant="underlined" prependIcon="mdi-account" appendIcon="mdi-check" appendInnerIcon="mdi-information" clearable :rules="[(v) => !!v || 'Name is required']" hint="Enter your full name" persistentHint counter maxlength="50">
		<template #prepend-inner>
			<v-icon>mdi-account</v-icon>
		</template>
		<template #append>
			<v-icon>mdi-check</v-icon>
		</template>
		<template #append-inner>
			<v-icon>mdi-information</v-icon>
		</template>
	</BaranTextbox>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const money = ref({
	decimal: ",",
	thousands: ".",
	prefix: "€ ",
	suffix: " #",
	precision: 2,
	masked: false,
});
</script>
```

## Combobox Component

The `BaranCombobox` component provides a customizable combobox interface for selecting items with various configurations.

#### Props

| Prop           | Type    | Default                        | Description                                                                                       |
| -------------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------- |
| items          | Array   | ['Item 1', 'Item 2', 'Item 3'] | Array of items to display in the combobox.                                                        |
| label          | String  | 'Select'                       | Label displayed above the combobox.                                                               |
| placeholder    | String  | 'Select an item'               | Placeholder text displayed when no item is selected.                                              |
| density        | String  | 'compact'                      | Density of the combobox ('comfortable' or 'compact').                                             |
| multiple       | Boolean | false                          | Whether multiple items can be selected.                                                           |
| chips          | Boolean | false                          | Whether to use chips for selected items display.                                                  |
| readonly       | Boolean | false                          | Whether the combobox is in readonly mode.                                                         |
| hint           | String  | ''                             | Hint text displayed below the combobox.                                                           |
| hideSelected   | Boolean | false                          | Whether to hide the selected item(s) from the dropdown list.                                      |
| variant        | String  | 'outlined'                     | Variant style of the combobox ('outlined', 'underlined', 'solo', 'solo-filled', 'solo-inverted'). |
| persistentHint | Boolean | false                          | Whether the hint text is persistent (visible when the combobox is focused).                       |
| hideNoData     | Boolean | true                           | Whether to show a message when no matching items are found.                                       |

#### Slots

| Slot Name | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `no-data` | Slot for custom no-data content. Make sure hide-no-data props is false |

#### Example Usage

```vue
<template>
	<BaranCombobox
		:items="['Apple', 'Banana', 'Orange', 'Grapes']"
		label="Select Fruit"
		placeholder="Choose a fruit"
		:density="'compact'"
		:multiple="true"
		:chips="true"
		:readonly="false"
		hint="Select multiple fruits"
		:hideSelected="false"
		variant="outlined"
		class="custom-combobox"
		:persistentHint="true"
	></BaranCombobox>
</template>

<script setup>
import BaranCombobox from "@/components/BaranCombobox.vue";
</script>

<style>
.custom-combobox {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
}
</style>
```

## File Input Component

The `BaranFileInput` component allows users to upload files with customizable options.

#### Props

| Prop             | Type    | Default          | Description                                                                          |
| ---------------- | ------- | ---------------- | ------------------------------------------------------------------------------------ |
| rules            | Array   | []               | Validation rules for file input (array of validation functions).                     |
| accept           | String  | ''               | File types accepted by the input (comma-separated MIME types).                       |
| variant          | String  | 'outlined'       | Variant style of the input (outlined, underlined, solo, solo-filled, solo-inverted). |
| clearable        | Boolean | false            | Whether the input can be cleared.                                                    |
| chips            | Boolean | false            | Whether to use chips for selected files.                                             |
| multiple         | Boolean | false            | Whether multiple files can be selected.                                              |
| prependInnerIcon | String  | ''               | Icon prepended inside the input.                                                     |
| label            | String  | 'File'           | Label text for the input.                                                            |
| appendInnerIcon  | String  | 'mdi-attachment' | Icon appended inside the input.                                                      |
| loading          | Boolean | false            | Whether the input is in loading state.                                               |
| color            | String  | ''               | Color of the input.                                                                  |
| disabled         | Boolean | false            | Whether the input is disabled.                                                       |
| prependIcon      | String  | ''               | Icon prepended outside the input.                                                    |
| appendIcon       | String  | ''               | Icon appended outside the input.                                                     |
| density          | String  | 'compact'        | Density of the input (comfortable or compact).                                       |
| rounded          | String  | 'xs'             | Rounded corner size of the input.                                                    |
| readonly         | Boolean | false            | Whether the input is readonly.                                                       |
| persistentHint   | Boolean | false            | Whether to show hint persistently.                                                   |
| hint             | String  | ''               | Hint text for the input.                                                             |
| counter          | Boolean | false            | Whether to show file counter.                                                        |
| showSize         | Boolean | false            | Whether to show file size.                                                           |

#### Example Usage

```vue
<template>
	<BaranFileInput
		:rules="fileRules"
		accept=".jpg,.png"
		variant="outlined"
		:clearable="true"
		:chips="true"
		:multiple="true"
		prependIcon="mdi-file"
		appendInnerIcon="mdi-cloud-upload"
		class="custom-file-input"
		density="compact"
		rounded="sm"
		:readonly="false"
		:persistentHint="true"
		hint="Select one or more files to upload."
		:counter="true"
		:showSize="true"
	/>
</template>

<script setup>
import { ref } from "vue";

const fileRules = ref([
	(file) => file.size < 1024 * 1024 * 2, // Max 2MB
	(file) => ["image/jpeg", "image/png"].includes(file.type),
]);
</script>

<style>
.custom-file-input .v-input--outline {
	border-color: var(--bordercolor);
}
.custom-file-input .v-input--outline.v-input--focused .v-input__control .v-input__slot::before {
	color: var(--primary);
}
</style>
```

## Select Component

The `BaranSelect` component provides a customizable select dropdown with various props and configurations.

#### Props

| Prop             | Type    | Default     | Description                                                                         |
| ---------------- | ------- | ----------- | ----------------------------------------------------------------------------------- |
| items            | Array   | See Example | An array of items to populate the select options.                                   |
| label            | String  | 'Select'    | The label displayed above the select dropdown.                                      |
| variant          | String  | 'outlined'  | The variant of the select (outlined, underlined, solo, solo-filled, solo-inverted). |
| clearable        | Boolean | false       | Whether the select allows clearing the selected value.                              |
| chips            | Boolean | false       | Whether to use chips for multiple selections.                                       |
| multiple         | Boolean | false       | Whether multiple items can be selected.                                             |
| prependInnerIcon | String  | ''          | The icon to prepend inside the select input.                                        |
| appendInnerIcon  | String  | ''          | The icon to append inside the select input.                                         |
| loading          | Boolean | false       | Whether the select is in a loading state.                                           |
| color            | String  | ''          | The color of the select.                                                            |
| disabled         | Boolean | false       | Whether the select is disabled.                                                     |
| prependIcon      | String  | ''          | The icon to prepend to the select.                                                  |
| appendIcon       | String  | ''          | The icon to append to the select.                                                   |
| density          | String  | 'compact'   | The density of the select ('comfortable', 'compact').                               |
| rounded          | String  | 'xs'        | The border radius of the select.                                                    |
| readonly         | Boolean | false       | Whether the select is readonly.                                                     |
| persistentHint   | Boolean | false       | Whether the hint text is persistent.                                                |
| returnObject     | Boolean | false       | Whether to return selected items as objects instead of values.                      |
| singleLine       | Boolean | false       | Whether to display the select as a single line.                                     |
| hint             | String  | ''          | Hint text displayed below the select.                                               |
| itemTitle        | String  | ''          | The property name for the title of items in the select dropdown.                    |
| itemValue        | String  | ''          | The property name for the value of items in the select dropdown.                    |

#### Example Usage

```vue
<template>
	<BaranSelect :items="selectItems" label="Choose an option" variant="outlined" :clearable="true" :chips="false" :multiple="false" color="#42b983" prepend-icon="mdi-format-list-checks" append-icon="mdi-chevron-down" class="mt-4" />
</template>

<script setup>
import { ref } from "vue";

const selectItems = ref(["Option 1", "Option 2", "Option 3"]);
</script>
```

## Number Input Component

The `BaranNumberInput` component integrates the Vuetify VNumberInput to provide a customizable number input field.

#### Props

| Prop           | Type    | Default    | Description                                                                        |
| -------------- | ------- | ---------- | ---------------------------------------------------------------------------------- |
| controlVariant | String  | 'stacked'  | The variant of the control (stacked, standard, enclosed).                          |
| rounded        | String  | 'xs'       | The rounded corners size of the input (xs, sm, md, lg).                            |
| label          | String  | 'Number'   | The label of the number input field.                                               |
| variant        | String  | 'outlined' | The variant style of the input (outlined, filled, solo, solo-inverted, solo-full). |
| loading        | Boolean | false      | Whether the number input is in loading state.                                      |
| color          | String  | ''         | The color of the input.                                                            |
| disabled       | Boolean | false      | Whether the number input is disabled.                                              |
| prependIcon    | String  | ''         | The icon to prepend to the input field.                                            |
| appendIcon     | String  | ''         | The icon to append to the input field.                                             |
| density        | String  | 'compact'  | The density of the input (comfortable, compact).                                   |
| hideInput      | Boolean | false      | Whether to hide the input field.                                                   |
| inset          | Boolean | false      | Whether the input is inset.                                                        |
| reverse        | Boolean | false      | Whether to reverse the input layout.                                               |
| min            | Number  | undefined  | The minimum value allowed in the input.                                            |
| max            | Number  | undefined  | The maximum value allowed in the input.                                            |
| step           | Number  | undefined  | The step value for incrementing/decrementing the input value.                      |

#### Example Usage

```vue
<template>
	<BaranNumberInput
		control-variant="stacked"
		rounded="md"
		label="Quantity"
		variant="filled"
		:loading="false"
		color="#42b983"
		:disabled="false"
		prepend-icon="mdi-minus"
		append-icon="mdi-plus"
		class="custom-number-input"
		density="comfortable"
		:hide-input="false"
		:inset="false"
		:reverse="false"
		:min="0"
		:max="10"
		:step="1"
	/>
</template>

<script setup></script>
```

## OTP Input Component

The `BaranOTPInput` component provides an input field for entering OTP (One-Time Password) codes with customizable configurations.

#### Props

| Prop            | Type    | Default    | Description                                                     |
| --------------- | ------- | ---------- | --------------------------------------------------------------- |
| length          | Number  | 6          | The length of the OTP input.                                    |
| variant         | String  | 'outlined' | The variant style of the input (solo, solo-filled, underlined). |
| backgroundColor | String  | ''         | The background color of the OTP input.                          |
| disabled        | Boolean | false      | Whether the OTP input is disabled.                              |
| loading         | Boolean | false      | Whether the OTP input is in loading state.                      |
| focusAll        | Boolean | false      | Whether to focus all OTP input fields.                          |
| placeholder     | String  | '-'        | The placeholder text for the OTP input fields.                  |
| divider         | String  | ''         | Divider character between OTP input fields.                     |
| width           | String  | ''         | The width of the OTP input.                                     |
| maxWidth        | String  | ''         | The maximum width of the OTP input.                             |
| minWidth        | String  | ''         | The minimum width of the OTP input.                             |
| height          | String  | ''         | The height of the OTP input.                                    |
| maxHeight       | String  | ''         | The maximum height of the OTP input.                            |
| minHeight       | String  | ''         | The minimum height of the OTP input.                            |

#### Events

The BaranOTPInput component does not emit any events directly.

#### Example Usage

```vue
<template>
	<BaranOTPInput :length="6" variant="underlined" background-color="#42b983" :disabled="false" class="otp-input" :loading="false" :focus-all="false" placeholder="-" divider="•" width="100%" height="100%" />
</template>

<script setup></script>
```

## Checkbox Component

The `BaranCheckbox` component is a customizable checkbox with various props and events.

### Props

| Prop       | Type    | Default    | Description                               |
| ---------- | ------- | ---------- | ----------------------------------------- |
| `label`    | String  | `Check me` | The label displayed next to the checkbox. |
| `checked`  | Boolean | `false`    | Whether the checkbox is checked.          |
| `color`    | String  | `#7367f0`  | The color of the checkbox.                |
| `disabled` | Boolean | `false`    | Whether the checkbox is disabled.         |

### Events

| Event             | Description                                   |
| ----------------- | --------------------------------------------- |
| `@update:checked` | Event emitted when the checked state changes. |

### Example Usage

```vue
<template>
	<BaranCheckbox v-model:checked="isChecked" label="Accept Terms" color="primary" :disabled="isDisabled" />
</template>

<script setup>
import { ref } from "vue";
import BaranCheckbox from "my-component-library/BaranCheckbox.vue";

const isChecked = ref(false);
const isDisabled = ref(false);
</script>
```

## Switch Component

The `BaranSwitch` component is a customizable switch with various props and events. Extended from Vuetify.

#### Props

| Prop          | Type    | Default   | Description                                                    |
| ------------- | ------- | --------- | -------------------------------------------------------------- |
| label         | String  | 'Switch'  | The label text displayed next to the switch.                   |
| indeterminate | Boolean | true      | Whether the switch is in an indeterminate state.               |
| disabled      | Boolean | false     | Whether the switch is disabled.                                |
| loading       | Boolean | false     | Whether the switch is in a loading state.                      |
| prependIcon   | String  | ''        | The icon to prepend to the switch.                             |
| appendIcon    | String  | ''        | The icon to append to the switch.                              |
| inset         | Boolean | false     | Whether the switch is inset (positioned inside its container). |
| color         | String  | '#7367f0' | The color of the switch.                                       |
| falseValue    | String  | false     | The value of the switch when it's unchecked.                   |
| trueValue     | String  | true      | The value of the switch when it's checked.                     |

#### Slots

| Slot Name | Description                    |
| --------- | ------------------------------ |
| `label`   | Slot for custom label content. |

#### Events

The BaranSwitch component does not emit any specific events directly.

#### Example Usage

```vue
<template>
	<BaranSwitch v-model="switchValue" label="Enable Notifications" color="#42b983" class="mt-2" :disabled="isDisabled" />

	<BaranSwitch v-model="switchValue" :disabled="isDisabled" :indeterminate="false">
		<template v-slot:label>
			Turn on the progress:
			<v-progress-circular :indeterminate="switchValue" class="ms-2" size="24"></v-progress-circular>
		</template>
	</BaranSwitch>
</template>

<script setup>
import { ref } from "vue";

const switchValue = ref(false);
const isDisabled = ref(false);
</script>
```

## Radio Group Component

The `BaranRadio` component allows selection from a group of radio buttons, with support for custom HTML labels and various configurations.

#### Props

| Prop   | Type    | Default     | Description                                                                  |
| ------ | ------- | ----------- | ---------------------------------------------------------------------------- |
| items  | Array   | See Example | An array of objects representing the radio buttons and their configurations. |
| color  | String  | '#7367f0'   | The color of the radio buttons.                                              |
| inline | Boolean | false       | Whether the radio buttons should display inline.                             |
| label  | String  | ''          | The label for the radio group.                                               |

#### Events

The BaranRadio component does not emit any events directly.

#### Example Usage

```vue
<template>
	<BaranRadio :items="radioItems" color="#42b983" :inline="true" group-label="Select an option" />
</template>

<script setup>
import { ref } from "vue";

const radioItems = ref([
	{ value: 1, label: "Option 1" },
	{
		value: 2,
		slotHTML: '<div>Option 2 <strong class="text-primary">with custom HTML</strong></div>',
	},
]);
</script>
```

## ColorPicker Component

The `BaranColorPicker` component allows users to select colors with various configurations.

#### Props

| Prop              | Type    | Default | Description                                                                                        |
| ----------------- | ------- | ------- | -------------------------------------------------------------------------------------------------- |
| disabled          | Boolean | false   | Disables the color picker.                                                                         |
| showSwatches      | Boolean | false   | Shows color swatches in the color picker.                                                          |
| hideCanvas        | Boolean | false   | Hides the color canvas in the color picker.                                                        |
| hideInputs        | Boolean | false   | Hides color value input fields in the color picker.                                                |
| elevation         | Number  | 2       | Elevation level of the color picker.                                                               |
| swatchesMaxHeight | Number  | 0       | Maximum height of the color swatches. If set to 0, height is auto-calculated based on swatch size. |
| width             | String  | ''      | Width of the color picker.                                                                         |
| maxWidth          | String  | ''      | Maximum width of the color picker.                                                                 |
| minWidth          | String  | ''      | Minimum width of the color picker.                                                                 |
| height            | String  | ''      | Height of the color picker.                                                                        |
| maxHeight         | String  | ''      | Maximum height of the color picker.                                                                |
| minHeight         | String  | ''      | Minimum height of the color picker.                                                                |

#### Example Usage

```vue
<template>
	<ColorPicker :disabled="false" :showSwatches="true" :hideCanvas="false" :hideInputs="false" :elevation="2" :swatchesMaxHeight="0" width="300px" :maxWidth="" :minWidth="" :height="" :maxHeight="" :minHeight=""></ColorPicker>
</template>

<script setup>
import ColorPicker from "@/components/ColorPicker.vue";
</script>
```

## Date Picker Component

The `BaranDatePicker` component encapsulates a date picker with customizable properties for enhanced flexibility.

#### Props

| Prop               | Type    | Default   | Description                                         |
| ------------------ | ------- | --------- | --------------------------------------------------- |
| color              | String  | '#7367f0' | Color theme of the date picker.                     |
| disabled           | Boolean | false     | Whether the date picker is disabled.                |
| showAdjacentMonths | Boolean | false     | Whether to show adjacent months in the date picker. |
| elevation          | Number  | 2         | Elevation level of the date picker.                 |
| rounded            | String  | ''        | Rounded corner size of the date picker.             |
| width              | String  | ''        | Width of the date picker.                           |
| maxWidth           | String  | ''        | Maximum width of the date picker.                   |
| minWidth           | String  | ''        | Minimum width of the date picker.                   |
| height             | String  | ''        | Height of the date picker.                          |
| maxHeight          | String  | ''        | Maximum height of the date picker.                  |
| minHeight          | String  | ''        | Minimum height of the date picker.                  |
| min                | String  | ''        | Minimum selectable date (format: 'YYYY-MM-DD').     |
| max                | String  | ''        | Maximum selectable date (format: 'YYYY-MM-DD').     |

#### Example Usage

```vue
<template>
	<BaranDatePicker color="#42a5f5" :disabled="false" :showAdjacentMonths="true" :hideCanvas="false" :hideInputs="false" :elevation="3" class="custom-datepicker" rounded="md" width="300px" maxWidth="500px" minHeight="200px" min="2024-07-01" max="2024-12-31"></BaranDatePicker>
</template>

<script setup>
import BaranDatePicker from "@/components/BaranDatePicker.vue";
</script>

<style>
.custom-datepicker {
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 16px;
}
</style>
```

## Table Component

The `BaranTable` component is a versatile data table with search functionality, sorting, and customizable headers and items. It supports various props, slots, and events to provide flexibility.

#### Props

| Prop                   | Type                                          | Default                                                                                                                                                                                          | Description                                                                                                                                                                                                                        |
| ---------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| headers                | Array                                         | `[{ key: 'id', title: 'INVOICE ID' }, { key: 'name', title: 'RECIPIENT NAME' }, { key: 'date', title: 'DATE' }, { key: 'amount', title: 'AMOUNT' }, { key: 'status', title: 'STATUS' }]`         | Array of header objects, each containing a `key` and `title`.                                                                                                                                                                      |
| items                  | Array                                         | `[{ id: 1, name: 'Eric Cartman', date: '23 Jun, 2024', amount: '$119.99', status: 'Completed' }, { id: 2, name: 'Kenny McCormick', date: '14 Jun, 2024', amount: '$39.99', status: 'Pending' }]` | Array of item objects to display in the table.                                                                                                                                                                                     |
| theme                  | String                                        | light                                                                                                                                                                                            | The theme of the table (light, dark).                                                                                                                                                                                              |
| items-per-page         | Number                                        | 5                                                                                                                                                                                                | Number of items to display per page.                                                                                                                                                                                               |
| sort-by                | Array                                         | `[]`                                                                                                                                                                                             | Array of sorting options.                                                                                                                                                                                                          |
| density                | String                                        | compact                                                                                                                                                                                          | Density of the table (comfortable, compact).                                                                                                                                                                                       |
| hide-default-footer    | Boolean                                       | false                                                                                                                                                                                            | Whether to hide the default footer.                                                                                                                                                                                                |
| hide-default-header    | Boolean                                       | false                                                                                                                                                                                            | Whether to hide the default header.                                                                                                                                                                                                |
| hide-default-body      | Boolean                                       | false                                                                                                                                                                                            | Whether to hide the default body.                                                                                                                                                                                                  |
| height                 | String                                        |                                                                                                                                                                                                  | Height of the table.                                                                                                                                                                                                               |
| fixed-header           | Boolean                                       | false                                                                                                                                                                                            | Whether the header should be fixed. Make sure specify height.                                                                                                                                                                      |
| show-select            | Boolean                                       | false                                                                                                                                                                                            | Whether to show selection checkboxes.                                                                                                                                                                                              |
| selectableKey          | String                                        |                                                                                                                                                                                                  | The key used to determine if an item is selectable.                                                                                                                                                                                |
| select-strategy        | String                                        | page                                                                                                                                                                                             | The strategy for item selection. `page`, `single`, `all`                                                                                                                                                                           |
| multi-sort             | Boolean                                       | false                                                                                                                                                                                            | Whether to allow multiple column sorting.                                                                                                                                                                                          |
| groupBy                | Boolean                                       | false                                                                                                                                                                                            | Whether to enable grouping of items.                                                                                                                                                                                               |
| loading                | Boolean                                       | false                                                                                                                                                                                            | Whether to show the loading state.                                                                                                                                                                                                 |
| disable-sort           | Boolean                                       | false                                                                                                                                                                                            | Disables sorting completely.                                                                                                                                                                                                       |
| expanded               | string[]                                      | []                                                                                                                                                                                               | Whether the item is expanded or not.                                                                                                                                                                                               |
| expand-on-click        | boolean                                       | false                                                                                                                                                                                            | Expands item when the row is clicked.                                                                                                                                                                                              |
| filter-keys            | string - string[]                             | undefined                                                                                                                                                                                        | Array of specific keys to filter on the item.                                                                                                                                                                                      |
| first-icon             | string                                        | '$first'                                                                                                                                                                                         | First icon.                                                                                                                                                                                                                        |
| first-page-label       | string                                        | '$vuetify.dataFooter.firstPage'                                                                                                                                                                  | Label for first page.                                                                                                                                                                                                              |
| fixed-footer           | boolean                                       | false                                                                                                                                                                                            | Use the fixed-footer prop together with the height prop to fix the footer to the bottom of the table.                                                                                                                              |
| hide-no-data           | boolean                                       | false                                                                                                                                                                                            | Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open. |
| hover                  | boolean                                       | false                                                                                                                                                                                            | Adds a hover effects to a table rows.                                                                                                                                                                                              |
| items-per-page-options | (number - { title: string; value: number })[] | `[ {value: 10, title: '10'}, {value: 25, title: '25'}, {value: 50, title: '50'}, {value: 100, title: '100'}, {value: -1, title: '$vuetify.dataFooter.itemsPerPageAll'} ]`                        | Array of options to show in the items-per-page dropdown.                                                                                                                                                                           |
| items-per-page-text    | string                                        | '$vuetify.dataFooter.itemsPerPageText'                                                                                                                                                           | Text for items-per-page dropdown.                                                                                                                                                                                                  |
| item-value             | SelectItemKey<any>                            | 'id'                                                                                                                                                                                             | Property on supplied items that contains its value.                                                                                                                                                                                |
| last-icon              | string                                        | '$last'                                                                                                                                                                                          | Last icon.                                                                                                                                                                                                                         |
| last-page-label        | string                                        | '$vuetify.dataFooter.lastPage'                                                                                                                                                                   | Label for last page.                                                                                                                                                                                                               |
| next-icon              | string                                        | '$next'                                                                                                                                                                                          | Next icon.                                                                                                                                                                                                                         |
| next-page-label        | string                                        | '$vuetify.dataFooter.nextPage'                                                                                                                                                                   | Label for next page.                                                                                                                                                                                                               |
| page-text              | string                                        | '$vuetify.dataFooter.pageText'                                                                                                                                                                   | Label for page number.                                                                                                                                                                                                             |
| prev-icon              | string                                        | '$prev'                                                                                                                                                                                          | Previous icon.                                                                                                                                                                                                                     |
| prev-page-label        | string                                        | '$vuetify.dataFooter.prevPage'                                                                                                                                                                   | Label for previous page.                                                                                                                                                                                                           |
| return-object          | boolean                                       | false                                                                                                                                                                                            | Changes the selection behavior to return the object directly rather than the value specified with item-value.                                                                                                                      |
| search                 | string                                        | undefined                                                                                                                                                                                        | Text input used to filter items.                                                                                                                                                                                                   |
| show-current-page      | boolean                                       | false                                                                                                                                                                                            | Show current page number between prev/next icons.                                                                                                                                                                                  |
| show-expand            | boolean                                       | false                                                                                                                                                                                            | Shows the expand toggle in default rows.                                                                                                                                                                                           |
| sort-asc-icon          | any                                           | '$sortAsc'                                                                                                                                                                                       | Icon used for ascending sort button.                                                                                                                                                                                               |
| sort-desc-icon         | any                                           | '$sortDesc'                                                                                                                                                                                      | Icon used for descending sort button.                                                                                                                                                                                              |
| sticky                 | boolean                                       | false                                                                                                                                                                                            | Sticks the header to the top of the table.                                                                                                                                                                                         |
| tag                    | string                                        | 'div'                                                                                                                                                                                            | Specify a custom tag used on the root element.                                                                                                                                                                                     |

#### Slots

| Slot Name      | Description                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `header.id`    | Slot for customizing the header of a column with key `id`.                                                                  |
| `headers`      | Slot for customizing the headers row. Receives `columns`, `isSorted`, `getSortIcon`, and `toggleSort` as scoped slot props. |
| `item`         | Slot for customizing an item row. Receives `item` as a scoped slot prop.                                                    |
| `item.actions` | Slot for customizing actions for each item. Receives `item` as a scoped slot prop.                                          |
| `group-header` | Slot for customizing the group header. Receives `item`, `columns`, `toggleGroup`, and `isGroupOpen` as scoped slot props.   |
| `top`          | Slot for placing content above the table.                                                                                   |
| `activator`    | Slot for customizing the activator button of a row.                                                                         |
| `expanded-row` | Slot for customizing the expanded row content. Receives `item` and `columns` as scoped slot props.                          |
| `loading`      | Slot for customizing the loading state.                                                                                     |

#### Events

| Event              | Description                                    |
| ------------------ | ---------------------------------------------- |
| `@update:selected` | Event emitted when the selected items change.  |
| `@update:sortBy`   | Event emitted when the sorting options change. |

#### Example Usage

```vue
<template>
	<BaranTable :headers="headers" item-value="name" show-select :items="items" v-model="selectedItems" @update:selected="updateSelectedItems" @update:sortBy="updateSortOptions">
		<template #headers="{ columns, isSorted, getSortIcon, toggleSort }">
			<tr>
				<th v-for="column in columns" :key="column.key" @click="toggleSort(column)">
					{{ column.title }}
					<v-icon v-if="isSorted(column)">{{ getSortIcon(column) }}</v-icon>
				</th>
			</tr>
		</template>

		<template #loading>
			<tr>
				<td colspan="5">Loading...</td>
			</tr>
		</template>
	</BaranTable>
</template>

<script setup>
import { ref } from "vue";

const headers = [
	{ key: "id", title: "INVOICE ID" },
	{ key: "name", title: "RECIPIENT NAME" },
	{ key: "date", title: "DATE" },
	{ key: "amount", title: "AMOUNT" },
	{ key: "status", title: "STATUS" },
];

const items = [
	{
		id: 1,
		name: "Eric Cartman",
		date: "23 Jun, 2024",
		amount: "$119.99",
		status: "Completed",
	},
	{
		id: 2,
		name: "Kenny McCormick",
		date: "14 Jun, 2024",
		amount: "$39.99",
		status: "Pending",
	},
];

const selectedItems = ref([]);

function updateSelectedItems(newSelectedItems) {
	selectedItems.value = newSelectedItems;
}

function updateSortOptions(newSortOptions) {
	console.log("Sort options updated:", newSortOptions);
}
</script>
```

## Carousel Component

The `BaranCarousel` component is a versatile carousel that can display images, text, or a mix of both. It is built with Vuetify's carousel functionality and offers various customization options.

#### Props

| Prop                    | Type    | Default                                                                         | Description                                                                        |
| ----------------------- | ------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| type                    | String  | mix                                                                             | The type of carousel items to display (`image`, `text`, `mix`).                    |
| images                  | Array   | [Array of default image URLs]                                                   | An array of image URLs for the carousel.                                           |
| texts                   | Array   | ['I ❤️ South Park', 'I ❤️ South Park', ...]                                     | An array of text items for the carousel.                                           |
| colors                  | Array   | ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'] | An array of colors for the background of text items.                               |
| items                   | Array   | [Array of default items with images, titles, and texts]                         | An array of objects containing images, titles, and texts for mixed carousel items. |
| fontSize                | Number  | 14                                                                              | The font size of the text in the carousel items.                                   |
| titleSize               | Number  | 22                                                                              | The font size of the title in the carousel items.                                  |
| textBackground          | String  | rgba(115, 103, 240, .8)                                                         | The background color of the text in mixed carousel items.                          |
| textColor               | String  | #fff                                                                            | The color of the text in the carousel items.                                       |
| height                  | String  | 100%                                                                            | The height of the carousel.                                                        |
| showArrows              | String  | hover                                                                           | When to show the navigation arrows (`always`, `hover`, `never`).                   |
| delimiterIcon           | String  | mdi-circle                                                                      | The icon used for the carousel delimiters.                                         |
| cycle                   | Boolean | true                                                                            | Whether the carousel should automatically cycle through items.                     |
| hideDelimiterBackground | Boolean | true                                                                            | Whether to hide the background of the delimiter icons.                             |
| hideDelimiters          | Boolean | false                                                                           | Whether to hide the delimiter icons.                                               |

#### Example Usage

```vue
<template>
	<BaranCarousel
		:type="'mix'"
		:height="'400px'"
		:show-arrows="'always'"
		:cycle="true"
		:images="['https://example.com/image1.jpg', 'https://example.com/image2.jpg']"
		:texts="['Text 1', 'Text 2']"
		:colors="['blue', 'green']"
		:items="[
			{
				img: 'https://example.com/image3.jpg',
				title: 'Title 1',
				text: 'Some descriptive text 1',
			},
			{
				img: 'https://example.com/image4.jpg',
				title: 'Title 2',
				text: 'Some descriptive text 2',
			},
		]"
		:font-size="16"
		:title-size="24"
		:text-background="'rgba(0, 0, 0, 0.5)'"
		:text-color="'#ffffff'"
	/>
</template>

<script setup></script>
```

## AvatarMenu Component

The AvatarMenu component is a dropdown menu activated by clicking on an avatar image. It includes a navigation drawer with a list of items and integrates with Vue Router for navigation.

#### Props

| Prop       | Type   | Default                                                                                                                                            | Description                                             |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| items      | Array  | `[{ text: 'Profile', icon: 'mdi-account-outline', href: '/components' }, { text: 'Billing', icon: 'mdi-note-text-outline', href: '/components' }]` | The list of navigation items with text, icon, and href. |
| image      | String | `https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png`                                                                                   | The URL of the avatar image.                            |
| name       | String | `Baran Toro`                                                                                                                                       | The name to be displayed in the menu.                   |
| title      | String | `Frontend Developer`                                                                                                                               | The title to be displayed in the menu.                  |
| menuHeight | Number | `225`                                                                                                                                              | The height of the main menu section.                    |

#### Slots

| Slot      | Description                    |
| --------- | ------------------------------ |
| activator | Slot for the avatar activator. |
| prepend   | Slot for prepending an icon.   |

#### Events

| Event  | Description                                                              |
| ------ | ------------------------------------------------------------------------ |
| @click | Event emitted when a menu item is clicked, navigates to the item's href. |

#### Example Usage

```vue
<template>
	<AvatarMenu :items="menuItems" image="https://example.com/avatar.jpg" name="John Doe" title="Software Engineer" :menuHeight="300" />
</template>

<script setup>
const menuItems = [
	{
		text: "Dashboard",
		icon: "mdi-view-dashboard-outline",
		href: "/dashboard",
	},
	{
		text: "Settings",
		icon: "mdi-cog-outline",
		href: "/settings",
	},
];
</script>
```

## Activity Timeline Component

The `BaranActivityTimeline` component displays a list of activities using a timeline format with customizable items and participant avatars.

## Sidebar Component

The BaranSidebar component provides a sidebar navigation with collapsible menu items and customizable appearance.

#### Props

| Prop             | Type   | Default   | Description                                                               |
| ---------------- | ------ | --------- | ------------------------------------------------------------------------- |
| logo             | String | ''        | The URL or path to the main logo image.                                   |
| miniLogo         | String | ''        | The URL or path to the mini version of the logo image.                    |
| menu             | Array  | []        | An array of objects representing the menu items and their configurations. |
| currentPathColor | String | '#7367f0' | The color used to highlight the current active menu item.                 |

#### Events

The BaranSidebar component does not emit any events directly.

#### Example Usage

```vue
<template>
	<BaranSidebar :logo="'/assets/logo.png'" :mini-logo="'/assets/mini-logo.png'" :menu="sidebarMenu" current-path-color="#42b983" />
</template>

<script setup>
import { ref } from "vue";

const sidebarMenu = ref([
	{
		icon: "mdi-view-dashboard",
		title: "Dashboard",
		href: "/dashboard",
	},
	{
		icon: "mdi-account-group",
		title: "Users",
		href: "/users",
	},
	{
		icon: "mdi-settings",
		title: "Settings",
		href: "/settings",
	},
]);
</script>
```

## BaranChartWidget Component

The `BaranChartWidget` component is a flexible and customizable chart component using ApexCharts. It provides various props to configure the chart and card appearance, including dynamic data and styles.

### Props

| Prop       | Type   | Default | Description                                                           |
| ---------- | ------ | ------- | --------------------------------------------------------------------- |
| chartProps | Object |         | Configuration object for the ApexCharts chart. This prop is required. |
| series     | Array  | `[]`    | Data series for the chart.                                            |
| bgColor    | String | `#fff`  | Background color of the card.                                         |
| elevation  | Number | `0`     | Elevation of the card (range from 0 to 24).                           |

### `chartProps` Object Properties

| Property               | Type    | Description                                                  |
| ---------------------- | ------- | ------------------------------------------------------------ |
| chartId                | String  | Unique identifier for the chart.                             |
| chartType              | String  | Type of the chart (e.g., `line`, `bar`, `pie`).              |
| toolbarShow            | Boolean | Whether to show the chart toolbar.                           |
| fillColors             | Array   | Colors for filling the chart.                                |
| fillType               | String  | Fill type (e.g., `solid`, `gradient`).                       |
| gradientShade          | String  | Gradient shade type (e.g., `light`, `dark`).                 |
| gradientType           | String  | Gradient type (e.g., `vertical`, `horizontal`).              |
| gradientShadeIntensity | Number  | Intensity of the gradient shade.                             |
| gradientOpacityFrom    | Number  | Starting opacity for the gradient.                           |
| gradientOpacityTo      | Number  | Ending opacity for the gradient.                             |
| gridShow               | Boolean | Whether to show the grid.                                    |
| gridPadding            | Object  | Padding for the grid.                                        |
| xaxisLabelsShow        | Boolean | Whether to show labels on the x-axis.                        |
| xaxisCategories        | Array   | Categories for the x-axis.                                   |
| xaxisAxisBorderShow    | Boolean | Whether to show the x-axis border.                           |
| xaxisAxisTicksShow     | Boolean | Whether to show ticks on the x-axis.                         |
| dataLabelsEnabled      | Boolean | Whether to enable data labels.                               |
| strokeCurve            | String  | Curve type for the stroke (e.g., `smooth`, `straight`).      |
| strokeWidth            | Number  | Width of the stroke.                                         |
| titleText              | String  | Title text of the chart.                                     |
| titleAlign             | String  | Alignment of the title (e.g., `left`, `center`, `right`).    |
| titleMargin            | Number  | Margin for the title.                                        |
| titleOffsetX           | Number  | Horizontal offset for the title.                             |
| titleOffsetY           | Number  | Vertical offset for the title.                               |
| titleFloating          | Boolean | Whether the title is floating.                               |
| titleStyle             | Object  | Style object for the title.                                  |
| subtitleText           | String  | Subtitle text of the chart.                                  |
| subtitleAlign          | String  | Alignment of the subtitle (e.g., `left`, `center`, `right`). |
| subtitleMargin         | Number  | Margin for the subtitle.                                     |
| subtitleOffsetX        | Number  | Horizontal offset for the subtitle.                          |
| subtitleOffsetY        | Number  | Vertical offset for the subtitle.                            |
| subtitleFloating       | Boolean | Whether the subtitle is floating.                            |
| subtitleStyle          | Object  | Style object for the subtitle.                               |
| yaxisLabelsShow        | Boolean | Whether to show labels on the y-axis.                        |
| legendShow             | Boolean | Whether to show the legend.                                  |
| responsiveOptions      | Array   | Array of responsive options.                                 |

### Example Usage

```vue
<template>
	<BaranChart :chartProps="chartProps" :series="series" bgColor="#f5f5f5" :elevation="4" />
</template>

<script setup>
import { ref } from "vue";

const chartProps = ref({
	chartId: "example-chart",
	chartType: "line",
	toolbarShow: true,
	fillColors: ["#7367f0", "#28c76f"],
	fillType: "gradient",
	gradientShade: "dark",
	gradientType: "vertical",
	gradientShadeIntensity: 0.5,
	gradientOpacityFrom: 0.7,
	gradientOpacityTo: 0.3,
	gridShow: true,
	gridPadding: { top: 0, right: 0, bottom: 0, left: 0 },
	xaxisLabelsShow: true,
	xaxisCategories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
	xaxisAxisBorderShow: true,
	xaxisAxisTicksShow: true,
	dataLabelsEnabled: true,
	strokeCurve: "smooth",
	strokeWidth: 2,
	titleText: "Monthly Sales",
	titleAlign: "center",
	titleMargin: 10,
	titleOffsetX: 0,
	titleOffsetY: 0,
	titleFloating: false,
	titleStyle: { fontSize: "18px", fontWeight: "bold", color: "#263238" },
	subtitleText: "For the year 2024",
	subtitleAlign: "center",
	subtitleMargin: 10,
	subtitleOffsetX: 0,
	subtitleOffsetY: 30,
	subtitleFloating: false,
	subtitleStyle: { fontSize: "14px", fontWeight: "regular", color: "#607d8b" },
	yaxisLabelsShow: true,
	legendShow: true,
	responsiveOptions: [
		{
			breakpoint: 1000,
			options: {
				chart: {
					width: "100%",
				},
			},
		},
	],
});

const series = ref([
	{
		name: "Sales",
		data: [30, 40, 45, 50, 49, 60],
	},
]);
</script>
```
