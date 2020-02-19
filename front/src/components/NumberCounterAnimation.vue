<template>
    <span>{{ animatedNumber }} <slot></slot></span>
</template>

<script>
import { TweenLite } from 'gsap';

export default {
  props: ['number', 'countTo', 'nbDecimals'],
  data() {
    return {
      tweenedNumber: 0,
    };
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(this.nbDecimals);
    },
  },
  mounted() {
    this.number = this.countTo;
  },
  watch: {
    number(newValue) {
      TweenLite.to(this.$data, 0.8, { tweenedNumber: newValue });
    },
  },
};
</script>
