<template>
    <div id="sidebar" v-bind:class="{ 'is-show': isShow }">
        <MenuIcon @click='triggerMenu' />
        <CategoryList />
        <HelpIcon />
    </div>
</template>

<script>
import MenuIcon from '@/components/sidebar/MenuIcon.vue';
import CategoryList from '@/components/sidebar/CategoryList.vue';
import HelpIcon from '@/components/sidebar/HelpIcon.vue';

export default {
  props: ['isShow'],
  components: {
    HelpIcon,
    CategoryList,
    MenuIcon,
  },
  methods: {
    triggerMenu(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
#sidebar {
    overflow-x: hidden;
    overflow-y: auto;
    z-index: 100;
    width: 19vw;
    left: -15vw;
    position: fixed;
    top: 0;
    bottom: 0;
    user-select: none;
    background-color: #2d2f3a;
    transition: left 0.3s;
    transition-timing-function: cubic-bezier(0.15, 0.2, 0.25, 1);
}
#sidebar.is-show {
    left: 0px;
}
</style>
