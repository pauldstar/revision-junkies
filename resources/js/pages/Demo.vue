<template>
    <main-wrapper :is-loading="isLoading">
        <demo-header/>

        <router-view name="demoIntro"/>
        <router-view name="pages"/>
        <router-view name="support"/>

        <demo-footer/>
    </main-wrapper>
</template>

<script>
    import mainWrapper from '@js/components/MainWrapper.vue';
    import demoHeader from "@js/components/demo/Header.vue";
    import demoFooter from '@js/components/demo/Footer.vue';
    import app from '@js/App.vue';

    export default {
        extends: app,
        components: { mainWrapper, demoHeader, demoFooter },
    }
</script>
