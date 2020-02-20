<template>
    <div>
        <div class="flex justify-center mt-4">
            <RoundedProfile class="mt-3" :picture="require('@/assets/cat.png')" />
        </div>
        <div class="my-2 text-lg text-gray-800 font-semibold">{{ userInfos.name }}</div>
        <AccountNumber />
        <CardWithRadial class="mt-10 mx-2 lg:invisible xl:visible" label="Last Month" percent="66" color="#28baa5"/>
    </div>
</template>

<script>
import CardWithRadial from '@/components/metrics/CardWithRadial.vue';
import AccountNumber from '@/components/account-info/AccountNumbers.vue';
import Logo from '@/components/Logo.vue';
import RoundedProfile from '@/components/account-info/RoundedProfile.vue';
import {mapGetters} from "vuex";

export default {
  name: 'AccountInfo',
  components: {
    CardWithRadial, AccountNumber, RoundedProfile,
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
