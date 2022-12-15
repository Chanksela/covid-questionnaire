<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <transition :enter-active-class="route.meta.transition">
        <component :is="Component"> </component>
      </transition>
    </router-view>
  </div>
</template>
