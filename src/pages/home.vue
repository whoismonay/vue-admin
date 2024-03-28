<template>
  <a-layout class="w-full h-full">
    <a-layout-header>这里是头部</a-layout-header>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      </a-layout-sider>
      <a-layout-content>
        <app-router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
const collapsed = ref(false)
const router = useRouter()
console.log(router.getRoutes())
</script>
