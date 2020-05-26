<template>
    <div class="hex-btn position-relative c-pointer mt-1" v-b-tooltip.hover="{placement}" title="Add Tip">
        <div class="hex hex-1"></div>
        <div class="hex hex-2"></div>
        <div class="hex hex-3"></div>
        <div class="hex-label"><i class="la la-pencil-alt"></i></div>
    </div>
</template>

<script>
    export default {
        props: {
            placement: {type: String, default: 'top'},
        },
    }
</script>
