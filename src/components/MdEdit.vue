<template>
  <Editor
    :value="value"
    :plugins="plugins"
    :mode="mode"
    @change="handleChange"
  />
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import { Editor, Viewer } from "@bytemd/vue-next";

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
  mode: string;
  handleChange: (v: string) => void;
}

const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  mode: () => "split",
  handleChange: (v: string) => {
    console.log(v);
  },
});
</script>

<style>
.bytemd-toolbar-icon.bytemd-tippy-right:last-child {
  display: none;
}
</style>
