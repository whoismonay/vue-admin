<template>
  <a-config-provider>
    <a-app class="w-full h-full overflow-hidden">
      <app-router-view />
    </a-app>
  </a-config-provider>
</template>
<script setup lang="ts"></script>
<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}

/* 滚动条样式 begin */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #9093994d;
  border-radius: 2px;
  box-shadow: inset 0 0 6px #0003;
}

::-webkit-scrollbar-track {
  background-color: #0000000d;
}

/* 滚动条样式 end */
</style>
