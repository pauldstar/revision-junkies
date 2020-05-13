<template>
    <div class="header landing_page">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <b-navbar toggleable="lg">
                        <b-navbar-brand href="#">
                            <img src="https://quixlab.com/demo/elaenia_vue/images/w_logo.png" alt="">
                            <span>Elaenia</span>
                        </b-navbar-brand>

                        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                        <b-collapse v-if="isLanding"  id="nav-collapse" is-nav>
                            <b-navbar-nav>
                                <b-nav-item href="#intro">Home</b-nav-item>
                                <b-nav-item href="#market">Market</b-nav-item>
                                <b-nav-item href="#portfolio">Portfolio</b-nav-item>
                                <b-nav-item href="#testimonial">Testimonial</b-nav-item>
                                <b-nav-item href="#contact">Contact</b-nav-item>
                            </b-navbar-nav>
                        </b-collapse>

                        <div class="dashboard_log">
                            <div class="d-flex align-items-center">
                                <div class="header_auth">
                                    <router-link to="sign-in" class="btn btn-primary">Sign In</router-link>
                                    <router-link to="sign-up" class="btn btn-outline-primary">Sign Up</router-link>
                                </div>
                            </div>
                        </div>
                    </b-navbar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            isLanding() {
                return this.$route.path === '/';
            }
        }
    }
</script>
