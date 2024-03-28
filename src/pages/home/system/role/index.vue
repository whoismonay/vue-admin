<template>
  <div>
    这里是角色管理
    <a-button type="primary" @click="$router.push('/')">首页</a-button>
    <a-button type="primary" @click="$router.push('/home/system/user')">
      用户管理
    </a-button>
    <a-input v-model:value="value" />
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'RolePage'
})
const value = ref('')
</script>
