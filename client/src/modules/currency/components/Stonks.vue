<template>
  <div>
    <svg
      v-if="value > previous"
      class="icon fill-green"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"
      />
    </svg>
    <svg
      v-else
      class="icon fill-red"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z"
      />
    </svg>
    <sub>{{ diff > 0.0 ? `+${diff.toFixed(1)}` : diff.toFixed(1) }}</sub>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    previous: Number,
  },
  computed: {
    diff() {
      return this.value - this.previous;
    },
  },
};
</script>

<style scoped>
.fill-green {
  fill: limegreen;
  background: none;
}

.fill-red {
  fill: red;
}
</style>
