<template>
    <div class="background-red flex flex-row-reverse">
        <div class="text-row flex flex-col justify-center justify-center w-9/12 text-left">
            <span class="text-xl ml-10 text-gray-200">Menu</span>
        </div>
        <div class="flex flex-col justify-center justify-center menu-icon order-first" @click='triggerMenu'>
            <i class="text-gray-200 el-icon-s-operation text-white text-2xl inline-block align-middle"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuIcon',
  methods: {
    triggerMenu(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
    .menu-icon {
        height: 4vw;
        width: 4vw;
        cursor: pointer;
    }
    .background-red {
        background-color: #ff0100;
        height: 4vw;
    }
</style>
