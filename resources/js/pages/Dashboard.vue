<template>
    <main-wrapper :is-loading="isLoading">
        <transition name="slide-up">
            <dashboard-header v-if="slideIn"/>
        </transition>

        <transition name="slide-down">
            <sidebar v-if="slideIn" />
        </transition>

        <router-view name="dashboardPageTitle"/>
        <router-view/>
        <dashboard-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from "@js/components/MainWrapper.vue";
    import dashboardHeader from "@js/components/dashboard/Header.vue";
    import sidebar from "@js/components/dashboard/Sidebar.vue";
    import pageTitle from "@js/components/dashboard/PageTitle.vue";
    import dashboardFooter from "@js/components/dashboard/Footer.vue";
    import slideOut from '@js/mixins/slide-out';
    import app from '@js/App.vue';

    export default {
        extends: app,
        mixins: [slideOut],
        components: {dashboardHeader, sidebar, mainWrapper, pageTitle, dashboardFooter},
    }
</script>

<style lang="scss">
    @import "resources/sass/mixins/slide-out";
</style>
