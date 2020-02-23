<template>
    <div>
        <div id="container" class="h-screen">
                <div class='w-full max-h-screen overflow-hidden'>
                    <div class="flex">
                        <div id="login-container" class="flex w-1/2 mr-auto ml-auto overflow-hidden">
                            <div class="w-1/2 image-panel bg-cover"></div>
                            <div class="w-1/2 bg-white">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style scoped>
#container {
    background: linear-gradient(to left, #7f7fd5, #86a8e7, #9ED8D4);
}
#login-container {
    height: 80vh;
    margin-top: 10vh;
    margin-bottom: 10vh;
    box-shadow: 0 0 7px 0 rgba(50, 50, 50, 0.5);
    border-radius: 1em;
}
#login-container div {
    height: 100%;
}
.image-panel {
    background-image: linear-gradient(to left top, rgba(84, 74, 125, 0.15), rgba(255, 212, 82, 0.1)), url("../assets/auth-banner.jpg");
    background-position: center;
}
</style>
