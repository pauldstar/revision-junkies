<template>
    <main-wrapper :is-loading="isLoading">
        <transition name="scroll-slide-up">
            <dashboard-header v-if="slideIn"/>
        </transition>

        <transition name="scroll-slide-down">
            <sidebar v-if="slideIn" />
        </transition>

        <div class="r-ml-85">
            <router-view name="dashboardPageTitle"/>
            <router-view/>
            <dashboard-footer/>
        </div>
    </main-wrapper>
</template>

<script>
    import mainWrapper from "@js/components/MainWrapper.vue";
    import dashboardHeader from "@js/components/dashboard/Header.vue";
    import sidebar from "@js/components/dashboard/Sidebar.vue";
    import pageTitle from "@js/components/dashboard/PageTitle.vue";
    import dashboardFooter from "@js/components/dashboard/Footer.vue";
    import scrollSlideOut from '@js/mixins/scroll-slide-out';
    import app from '@js/App.vue';

    export default {
        extends: app,
        mixins: [scrollSlideOut],
        components: {dashboardHeader, sidebar, mainWrapper, pageTitle, dashboardFooter},
    }
</script>

<style lang="scss">
    @import "../../sass/mixins/scroll-slide-out";
</style>
