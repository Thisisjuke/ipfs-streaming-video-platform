<template>
    <div>
        <sidebar @click='toggleSidebar' :isShow="showSidebar"></sidebar>
        <div id="container" class="h-screen">
            <div class="flex h-full ">
                <div class="m-4 w-1/5 max-h-screen overflow-hidden bg-white rounded">
                    <AccountInfo class="p-3" />
                </div>
                <div class='w-4/5 max-h-screen overflow-hidden bg-gray-200 rounded ml-0 m-4'>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '@/components/sidebar/Sidebar.vue';
import AccountInfo from '@/components/account-info/AccountInfo.vue';

export default {
  name: 'app',
  data() {
    return {
      containerPosition: 0,
      showSidebar: false,
    };
  },
  components: { AccountInfo, Sidebar },
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
