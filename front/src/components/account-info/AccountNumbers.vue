<template>
    <div>
        <div class="flex mt-4">
            <div class="w-1/2 border-r">
                <div class="align-middle">
                    <div class="text-gray-600 text-lg">Total Memory</div>
                    <div class="mt-1">
                        <i class="el-icon-odometer text-green-600 text-3xl inline-block align-middle"></i>
                        <NumberCounterAnimation countTo="1.34" nbDecimals=2 class="ml-1 text-gray-900 text-xl align-middle">GO</NumberCounterAnimation>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="align-middle">
                    <div class="text-gray-600 text-lg">Total Minutes</div>
                    <div class="mt-1">
                        <i class="el-icon-timer text-green-600 text-3xl inline-block align-middle"></i>
                        <NumberCounterAnimation countTo="112" nbDecimals=0 class="ml-1 text-gray-900 text-xl align-middle">Mins</NumberCounterAnimation>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-6">
            <div class="w-full">
                <div class="text-gray-600 text-lg">Subscription Left</div>
                <NumberCounterAnimation countTo="12" nbDecimals=0 class="ml-1 text-gray-900 text-xl align-middle font-semibold">Days</NumberCounterAnimation>
            </div>
        </div>
        <div class="flex mt-8">
            <div class="w-1/3">
                <div class="align-middle">
                    <div class="text-gray-600 text-m">Today</div>
                    <div class="mt-1">
                        <NumberCounterAnimation countTo="118" nbDecimals=0 class="ml-1 text-gray-900 text-sm align-middle">Views</NumberCounterAnimation>
                    </div>
                </div>
            </div>
            <div class="w-1/3">
                <div class="align-middle">
                    <div class="text-gray-600 text-m">Last Week</div>
                    <div class="mt-1">
                        <NumberCounterAnimation countTo="2872" nbDecimals=0 class="ml-1 text-gray-900 text-sm align-middle">Views</NumberCounterAnimation>
                    </div>
                </div>
            </div>
            <div class="w-1/3">
                <div class="align-middlxe">
                    <div class="text-gray-600 text-m">Last Month</div>
                    <div class="mt-1">
                        <NumberCounterAnimation countTo="7334" nbDecimals=0 class="ml-1 text-gray-900 text-sm align-middle">Views</NumberCounterAnimation>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NumberCounterAnimation from '@/components/NumberCounterAnimation.vue';

export default {
  name: 'AccountNumbers',
  components: {
    NumberCounterAnimation,
  },
};
</script>
