
<template>
    <ul class="mt-3">
        <li class="text-white text-left text-xs flex pb-1" v-for="{icon, text, value} in rows" :key="text">
            <div class="w-4/5 ">
                <i :class="['ml-1 mr-2 float-left text-gray-200 text-white text-xl m-auto ', icon, icon === 'el-icon-caret-top' ? 'text-green-500' : 'text-red-600' ]" ></i>
                <div class=" float-left title">{{ text }}</div>
            </div>
            <span class="w-1/5 text-center">
                {{ value }}
            </span>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'ListRowsIcons',
  props: ['rows'],
};
</script>

<style scoped>
    .title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 80%;
    }
</style>
