<template>
    <v-card class="sidebar">
        <v-navigation-drawer
          :width="menuWidth"
          class="bg-white pa-md-4"
          theme="light"
          permanent
        >
          <v-btn 
            icon="mdi-circle-double" 
            class="menu-control"
            color="#2f2b3db3"
            variant="text"
            width="20"
            @click="menuWidth > 200 ? menuWidth = 125 : menuWidth = 250"
          ></v-btn>
          <v-sheet class="logo-wrapper d-flex justify-center align-center">
            <v-img
              class="mb-4 mx-auto"
              :src="logo"
              v-if="menuWidth > 200"
            />
            <v-img
              class="mb-6 mx-auto"
              :src="miniLogo"
              max-width="75"
              v-else
            />
          </v-sheet>
          <v-list class="navigation-wrapper">
            <v-sheet v-for="item in menu">
              <v-list-item 
                v-if="!item.dropdown"
                :prepend-icon="item.icon" 
                :title="menuWidth > 200 ? item.title : ''"
                class="menu-item"
                :style="{ 
                  background: $route.path === item.href ? currentPathColor : '' ,
                  color: $route.path === item.href ? '#fff' : '' ,
                }"
                style="padding-inline: 1rem !important;"
                @click="navigate(item.href)"
              >
              </v-list-item>
              <v-expansion-panels variant="accordion" v-else>
                <v-expansion-panel>
                    <v-expansion-panel-title 
                      v-slot="{ expanded }"
                      :style="{ 
                        background: $route.path === item.href ? currentPathColor : '' ,
                        color: $route.path === item.href ? '#fff' : '' ,
                      }"
                      style="padding-inline: 1rem !important;"
                    > <!-- expand-icon="" -->
                      <v-list-item 
                        :prepend-icon="item.icon" 
                        :title="menuWidth > 200 ? item.title : ''"
                        class="menu-item"
                      ></v-list-item>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <v-list-item 
                        v-for="sub in item.dropdownItems"
                        :prepend-icon="sub.icon" 
                        :title="menuWidth > 200 ? sub.title : ''"
                        class="sub-menu-item"
                        :style="{ color: $route.path === sub.href ? currentPathColor : '' }"
                        @click="navigate(sub.href)"
                      >
                      </v-list-item>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
              </v-expansion-panels>
            </v-sheet>  
          </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  logo: {
    type: String,
    default: ''
  },
  miniLogo: {
    type: String,
    default: ''
  },
  menu: {
    type: Array,
    default: () => []
  },
  currentPathColor: {
    type: String,
    default: '#7367f0'
  },
  dropdown: {
    tpye: Boolean,
    default: false
  },
})

const menuWidth = ref(250)

const navigate = (route) => {
  route.startsWith('http') ? window.open(route, '_blank')  : router.push(route)
}
</script>

<style>
.sidebar .v-navigation-drawer {
    padding-top: 2rem !important;
    border: none !important;
    margin: 1rem 0rem;
    border-radius: 8px;
    height: 100% !important;
    max-height: 97%;
}
.sidebar {
   margin: 0 1rem !important;
   position: relative;
}
.sidebar .logo-wrapper {
    width: 100%;
    max-width: 180px
}
.sidebar  .navigation-wrapper .v-list-item--one-line {
    padding-inline: 0 !important;
}
.sidebar  .navigation-wrapper {
    color: #B1B1B1 !important;
}
.sidebar  .navigation-wrapper .v-list-item__spacer {
    width: 12px !important;
}
.sidebar .v-expansion-panel-title {
  padding: 0 !important;
}
.sidebar .v-expansion-panel__shadow {
  box-shadow: none !important;
}
.sidebar .menu-item {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 8px !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
}
.sidebar .sub-menu-item {
  font-size: .75rem;
  padding: 1rem;
  border-radius: 8px !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
}
.sidebar .v-list-item-title {
  white-space: pre-wrap !important;
}
.sidebar .menu-control {
  z-index: 99;
  position: absolute;
  right: .75rem;
  top: 0;
  opacity: .5;
  transition: .5s;
}
.sidebar .menu-control:hover {
  opacity: 1;
  transition: .5s;
}
.sidebar .v-btn--variant-text .v-btn__overlay {
  background: transparent !important;
}
.v-expansion-panel--active>.v-expansion-panel-title:not(.v-expansion-panel-title--static) {
  min-height: unset !important;
}
</style>
