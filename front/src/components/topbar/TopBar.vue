<template>
    <div class="w-full">
        <div>
            {{userInfos}}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TopBar',
    computed: {
        ...mapGetters('account', [
            'userInfos'
        ])
    }
};
</script>

<style scoped>

</style>
