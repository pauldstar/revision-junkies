<template>
    <nav id="sidebar">
        <create-tip-button class="d-none d-sm-block" placement="bottom"/>

        <div id="sidebar__desktop" class="d-none d-sm-block">
            <ul>
                <li>
                    <router-link to="/dashboard/home" v-b-tooltip.hover="{placement: 'right'}" title="Home">
                        <span><i class="la la-igloo"></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/buy-sell" v-b-tooltip.hover="{placement: 'right'}" title="Exchange">
                        <span><i class="la la-exchange-alt"></i></span>
                    </router-link>
                </li>
                <li class="col-4 col-sm-12">
                    <router-link to="/dashboard/settings" v-b-tooltip.hover="{placement: 'right'}" title="Setting">
                        <span><i class="la la-tools"></i></span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/dashboard/accounts" v-b-tooltip.hover="{placement: 'right'}" title="Account">
                        <span><i class="la la-user"></i></span>
                    </router-link>
                </li>
            </ul>
        </div>

        <div id="sidebar__mobile" class="d-sm-none">
            <router-link to="/dashboard/home">
                <span><i class="la la-igloo"></i></span>
            </router-link>
            <router-link to="/dashboard/buy-sell">
                <span><i class="la la-exchange-alt"></i></span>
            </router-link>
            <router-link to="/dashboard/create-tip" class="create-tip-button">
                <span><i class="la la-pencil-alt"></i></span>
            </router-link>
            <router-link to="/dashboard/settings">
                <span><i class="la la-tools"></i></span>
            </router-link>
            <router-link to="/dashboard/accounts">
                <span><i class="la la-user"></i></span>
            </router-link>
        </div>
    </nav>
</template>

<script>
    import CreateTipButton from '@js/components/dashboard/CreateTipButton';

    export default {
        components: {CreateTipButton},
    }
</script>
