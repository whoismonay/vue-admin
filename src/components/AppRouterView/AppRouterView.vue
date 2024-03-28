<template>
  <router-view v-slot="{ Component }">
    <Transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <keep-alive :include="cacheRouteNames">
        <component :is="Component" />
      </keep-alive>
    </Transition>
  </router-view>
</template>
<script lang="ts" setup>
const cacheRouteNames: string[] = []
</script>
