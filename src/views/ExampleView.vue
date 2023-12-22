<template>
  <div id="example-view">
    <CodeEdit :value="codeValue" :handle-change="onCodeChange" />
    <MdEdit :value="mdValue" :handle-change="onMdChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MdEdit from "@/components/MdEdit.vue";
import CodeEdit from "@/components/CodeEdit.vue";

const codeValue = ref("");
const mdValue = ref("");

const onMdChange = (v: string) => {
  mdValue.value = v;
};

const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>
