<template>
  <button class="great-button" :class="buttonStyle"><slot></slot></button>
</template>
<script setup lang="ts">
import "./style/index.less";
import { computed } from "vue";

defineOptions({ name: "great-button" });

type ButtonProps = {
  type?: string;
  plain?: boolean;
  round?: boolean;
  disabled?: boolean;
}

const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return {
    [`great-button--${buttonProps.type}`]: buttonProps.type,
    "great-button--plain": buttonProps.plain,
    "great-button--round": buttonProps.round,
    "great-button--disabled": buttonProps.disabled,
  };
});

</script>