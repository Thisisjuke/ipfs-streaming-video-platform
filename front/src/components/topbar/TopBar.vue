<template>
    <div class="w-full pt-2 pb-4">
        <div class="flex items-center">
            <SearchBar class="w-1/2"/>
            <div class="1/2 items-center flex flex-grow justify-end">
                <span class="cursor-pointer">
                    <span class="text-sm mx-1 text-orange-500 leading-relaxed inline-block hover:underline">Upgrade your plan</span>
                    <i class="el-icon-sunrise-1 text-xl text-orange-500 "></i>
                </span>

                <el-switch
                        class="ml-6"
                        v-model="isSubscribed"
                        active-color="#ed8936"
                        inactive-color="#606266">
                </el-switch>

                <el-badge :value="12" type="primary" class="ml-12 cursor-pointer bg-gray-400 rounded-full h-8 w-8 flex items-center justify-center">
                    <i class="el-icon-bell"></i>
                </el-badge>

                <div class="block ml-10">
                    <el-avatar :size="45" :src="require('@/assets/cat.png')"></el-avatar>
                </div>

                <el-dropdown
                    class="ml-1"
                    trigger="click"
                >
                  <span class="el-dropdown-link">
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item disabled class="clearfix">
                            <span class="text-gray-700">{{userInfos.name}}</span>
                        </el-dropdown-item>
                        <el-dropdown-item class="clearfix">
                            Truc
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchBar from '@/components/topbar/Search'

export default {
    name: 'TopBar',
    components: {
      SearchBar
    },
    data: function(){
      return {
        isSubscribed: false
      }
    },
    computed: {
      ...mapGetters('account', [
        'userInfos'
      ])
    }
};
</script>

<style scoped>

</style>
