<template>
    <div>
        <h1>Video Display</h1>
        <VideoPlayer :config="config"/>
    </div>
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer.vue';

export default {
  components: {
    VideoPlayer,
  },
  data: () => (
    {
      config: {
        id: 'player',
        url: '//bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        autoplay: false,
      },
    }
  ),
};
</script>
