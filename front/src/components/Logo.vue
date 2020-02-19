
<template>
    <div class="overflow-hidden">
        <img class="inline-block" :src="require('@/assets/logo.png')" alt="Logo">
    </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style scoped>
    img {
        width: auto;
        height: auto;
        max-width: 100%;
    }
</style>
