<template>
  <div>
    <StonksUpIcon
      v-if="value > previous"
      width="24"
      height="24"
      color="limegreen"
    />
    <StonksDownIcon v-else width="24" height="24" color="red" />

    <sub>{{ diffWithSymbol }}</sub>
  </div>
</template>

<script>
import StonksDownIcon from '@/components/icons/StonksDownIcon.vue';
import StonksUpIcon from '@/components/icons/StonksUpIcon.vue';

export default {
  props: {
    value: Number,
    previous: Number,
  },
  computed: {
    diff() {
      return this.value - this.previous;
    },
    diffWithSymbol() {
      return this.diff > 0.0
        ? `+${this.diff.toFixed(1)}`
        : this.diff.toFixed(1);
    },
  },
  components: { StonksUpIcon, StonksDownIcon },
};
</script>
