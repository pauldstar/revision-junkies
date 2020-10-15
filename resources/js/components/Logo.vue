<template>
    <component
        :is="logoWrapper"
        to="/dashboard"
        class="d-inline-flex logo"
    >
        <template v-if="responsive">
            <span class="reverse-text">Z</span>
            <span class="d-sm-none ml-n1">Z</span>
            <span class="d-none d-sm-block">tudytipZ</span>
        </template>
        <template v-else-if="small">
            <span class="reverse-text mr-n1">Z</span>Z
        </template>
        <template v-else>
            <span class="reverse-text">Z</span>tudytipZ
        </template>
    </component>
</template>

<script>
    export default {
        props: {
            responsive: {type: Boolean, default: false},
            small: {type: Boolean, default: true},
            link: {type: Boolean, default: true}
        },

        computed: {
            logoWrapper() {
                return this.link ? 'router-link' : 'div';
            }
        }
    }
</script>
