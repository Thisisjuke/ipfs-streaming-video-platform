<template>
    <div class="pr-2 text-left">
        <label for="search">
            <i class="el-icon-search text-lg" />
        </label>
        <input
            id="search"
            class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none ml-2 text-sm w-2/3"
            autocomplete="off"
            placeholder="Search in your Dashboard"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Search',
}
</script>

<style scoped>
#search{
    border-bottom: 1px solid #cbd5e0;
}
#search:focus{
    border-bottom: 1px solid #606266;
}
</style>
