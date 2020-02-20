<template>
    <li>
        <router-link :to="{ name: routeName }">
            <div class="flex flex-row-reverse category-row">
                <div class="text-row flex flex-col justify-center justify-center w-9/12 text-left">
                    <span class="ml-10 text-gray-400">{{ text }}</span>
                </div>
                <div class="flex flex-col justify-center justify-center icon-size order-first" >
                    <i :class="['text-gray-400 text-2xl inline-block align-middle', icon]"></i>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
  name: 'categoryRow',
  props: ['text', 'icon', 'routeName'],
};
</script>

<style scoped>
    .category-row {
        height: 4vw;
    }
    .category-row:hover {
        background-color: #373D48;
    }
    .icon-size {
        height: 4vw;
        width: 4vw;
        cursor: pointer;
    }
    .router-link-active .category-row {
        background-color: #434a57;
    }
</style>
