<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="{
      width: width + 'px',
      height: height + 'px',
      fill: 'var(--' + color + ')',
    }"
  >
    <path fill="currentColor" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
  </svg>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number,
    color: {
      type: String,
      default: 'white',
    },
  },
};
</script>
