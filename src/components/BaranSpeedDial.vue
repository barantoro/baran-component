<template>
    <v-speed-dial
    :location="position[0]+' '+position[1]"
    transition="scale-transition"
    >
    <template v-slot:activator="{ props: activatorProps }">
        <v-btn
        :color="color"
        :icon="icon"
        v-bind="activatorProps"
        >
        </v-btn>
    </template>

    <v-btn 
        v-for="item in items" :key="item"
        :icon="item.icon" 
        :variant="item.variant" 
        :color="item.color"
        @click="handleClick(item)"
    >
    {{ item.text }}
    </v-btn>
    </v-speed-dial>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        default: () => [
            {
                icon: 'mdi-alpha-d',
                variant: 'tonal',
                color: '#8BA3CB',
                text: '🇩🇪'
            },
            {
                icon: 'mdi-alpha-e',
                variant: 'tonal',
                color: '#8BA3CB',
                text: '🇬🇧'
            }
        ]
    },
    position: {
        type: Array,
        default: () => ['left', 'center']
    },
    icon: {
        tpye: String,
        default: 'mdi-translate'
    },
    color: {
        type: String,
        default: '#8BA3CB'
    }
})

const emit = defineEmits(['click'])

const handleClick = (item) => {
  emit('click', item)
}

</script>