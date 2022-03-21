<template>
  <router-view>
    <template #default>
      <router-view v-slot="{ Component, currentRoute = route }">
        <transition name="fade" mode="out-in" appear>
          <component
            :is="Component"
            v-if="currentRoute.meta.ignoreCache"
            :key="currentRoute.fullPath"
          />
          <keep-alive v-else>
            <component :is="Component" :key="currentRoute.fullPath" />
          </keep-alive>
        </transition>
      </router-view>
    </template>
  </router-view>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  const route = useRoute();
</script>

<style scoped lang="less"></style>
