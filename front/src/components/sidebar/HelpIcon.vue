<template>
    <div class="background-grey flex flex-row-reverse fixed bottom-0">
        <div class="flex flex-col justify-center justify-center help-icon order-first">
            <i class="text-gray-400 el-icon-info text-white text-2xl inline-block align-middle"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelpIcon',
};
</script>

<style scoped>
    .help-icon {
        height: 4vw;
        width: 4vw;
        cursor: pointer;
    }
    .background-grey {
        background-color: #1c2028;
        height: 4vw;
        width: 19vw;
    }
</style>
