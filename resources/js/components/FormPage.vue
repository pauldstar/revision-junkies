<template>
    <div class="authentication section-padding">
        <div class="container-fluid h-100">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-12 col-xl-8">

                    <div v-if="logo" class="mini-logo text-center my-5">
                        <logo class="h1"/>
                    </div>

                    <div class="auth-form card">

                        <div v-if="$slots['header']" class="card-header justify-content-center px-3">
                            <slot name="header"/>
                        </div>

                        <div class="card-body px-3">
                            <slot/>
                        </div>

                        <div v-if="$slots['footer']" class="card-footer justify-content-center px-3">
                            <slot name="footer"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logo from '@js/components/Logo';

    export default {
        components: {logo},

        props: {
            logo: {type: Boolean, default: true},
            large: {type: Boolean, default: false},
        }
    }
</script>
