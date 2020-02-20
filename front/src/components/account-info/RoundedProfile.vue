
<template>
    <zoom-center-transition>
        <div v-show="show" class="border border-gray-500 rounded-full h-32 w-32 p-4" >
            <div class="h-24 w-24 rounded-full mx-auto bg-cover bg-center" :style="style"></div>
        </div>
    </zoom-center-transition>
</template>

<script>
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
  name: 'RoundedProfile',
  props: {
    picture: String,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  components: {
    ZoomCenterTransition,
  },
  computed: {
    style() {
      return `background-image: url('${this.picture}')`;
    },
  },
};
</script>

<style scoped>

</style>
