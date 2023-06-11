<template>
  <div>
    <StonksUpIcon
      v-if="value > previous"
      width="24"
      height="24"
      color="green"
    />
    <StonksDownIcon v-else width="24" height="24" color="red" />

    <!--     todo computed-->
    <sub>{{ diff > 0.0 ? `+${diff.toFixed(1)}` : diff.toFixed(1) }}</sub>
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
  },
  components: { StonksUpIcon, StonksDownIcon },
};
</script>
