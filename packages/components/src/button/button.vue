<template>
  <button class="great-button" :class="buttonStyle"><slot></slot></button>
</template>
<script setup lang="ts">
import "./style/index.less";
import { computed } from "vue";

defineOptions({ great: "ea-button" });

type ButtonProps = {
  type?: string;
}

const buttonProps = defineProps<ButtonProps>();

console.log('buttonProps', buttonProps);

const buttonStyle = computed(() => {
  return { [`great-button--${buttonProps.type}`]: buttonProps.type };
});

</script>