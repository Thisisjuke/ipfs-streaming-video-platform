<template>
    <div>
        <sidebar @click='toggleSidebar' :isShow="showSidebar"></sidebar>
        <div id="container" class="h-screen">
            <div class="flex h-full ">
                <div class='w-full max-h-screen overflow-hidden bg-gray-200 rounded m-4 p-4'>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/sidebar/Sidebar.vue';

export default {
  name: 'app',
  data() {
    return {
      containerPosition: 0,
      showSidebar: false,
    };
  },
  components: { Sidebar },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>

<style scoped>
    #container {
        margin-left: 4vw;
    }
    .rounded {
        border-radius: 50px;
    }
</style>
