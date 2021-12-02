<template>
  <a-card :bordered="false">
    <a-typography-title class="section-titile" :heading="6">
      {{ $t('multiDAnalysis.card.title.activeContributors') }}
    </a-typography-title>
    <a-list :bordered="false" :split="false" style="padding-bottom: 4px">
      <a-list-item
        v-for="(item, idx) in renderData"
        :key="idx"
        style="padding: 0"
      >
        <a-list-item-meta
          :title="item.name"
          :description="item.email"
          style="padding: 3px 0"
        >
          <template #avatar>
            <a-avatar>
              <img alt="avatar" :src="item.avatar" />
            </a-avatar>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const renderData = [
      {
        name: '秦臻宇',
        email: 'qingzhenyu@arco.design',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      },
      {
        name: '于涛',
        email: 'yuebao@arco.design',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      },
      {
        name: '宁波',
        email: 'ningbo@arco.design',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      },
      {
        name: '郑曦月',
        email: 'zhengxiyue@arco.design',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      },
      {
        name: '宁波',
        email: 'ningbo@arco.design',
        avatar:
          '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      },
    ];
    return {
      renderData,
    };
  },
});
</script>
