<template>
    <div id="app">
        <Timer/>
    </div>
</template>

<script>
    import Timer from './components/Timer.vue'

    export default {
        name: 'app',
        components: {
            Timer
        }
    }
</script>

<style lang="scss">
    @import './sass/style.scss';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 3em;
    }
</style>
