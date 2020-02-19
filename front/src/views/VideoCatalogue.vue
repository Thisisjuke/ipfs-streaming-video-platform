<template>
    <div>
        <h1>Catalogue</h1>
        {{ videos }}
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.fetchVideos();
  },
  computed: {
    ...mapState('video', [
      'videos',
    ]),
  },
  methods: {
    ...mapActions('video', [
      'fetchVideos',
    ]),
  },
};
</script>
