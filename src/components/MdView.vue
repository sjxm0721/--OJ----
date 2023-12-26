<template>
  <Viewer :value="value" :plugins="plugins" readonly />
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Viewer } from "@bytemd/vue-next";

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];

/**
 * 定义组件属性类型
 */
interface Props {
  value: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
});
</script>

<style>
.bytemd-toolbar-icon.bytemd-tippy-right:last-child {
  display: none;
}
</style>
