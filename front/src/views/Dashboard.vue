<template>
  <div>
    <TopBar />

    <div class="flex">
      <div class="w-2/3">
        <h2>Dashboard</h2>
        <h3>Discover all information about your account, videos and metrics on this screen.</h3>
      </div>
      <div class="w-2/3">

      </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/topbar/TopBar.vue';

export default {
  name: 'dashboard',
  components: { TopBar }
};
</script>
