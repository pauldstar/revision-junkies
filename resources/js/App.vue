<template>
    <div id="app">
        <transition name="fade">
            <div id="preloader" v-if="isLoading">
                <div class="sk-three-bounce">
                    <div class="sk-child sk-bounce1"></div>
                    <div class="sk-child sk-bounce2"></div>
                    <div class="sk-child sk-bounce3"></div>
                </div>
            </div>
        </transition>

        <router-view :is-loading="isLoading"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isLoading: true,
                year: new Date().getFullYear()
            }
        },

        mounted() {
            this.isLoading = false;
        },

        updated() {
            this.setTitle();
        },

        computed: {
            title() {
                return this.$route.meta.title;
            },
        },

        methods: {
            setTitle() {
                document.title = this.title ? 'Studytipz ~ ' + this.title : 'Studytipz';
            }
        }
    }
</script>

<style>
    input[type=date]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        display: none;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
