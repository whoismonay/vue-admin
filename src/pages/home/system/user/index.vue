<template>
  <div>
    这里是用户管理
    <a-button type="primary" @click="$router.push('/')">首页</a-button>
    <a-button type="primary" @click="$router.push('/home/system/role')">
      角色管理
    </a-button>
    <a-input v-model:value="value" />
    <div style="width: 500px; height: 100px">
      <div style="width: 400px; height: 1000px"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'UserPage'
})
definePage({
  meta: {
    title: '用户管理',
    keepAlive: true
  }
})
const value = ref('')
</script>
