<template>
    <div class="input-group input-group-seamless-append">
        <input
            type="text"
            id="searchbar-dbh"
            class="form-control"
            ref="search"
            v-model="search"
        >

        <logo
            v-if="!search"
            class="placeholder-logo"
            :responsive="true"
        />

        <div class="input-group-append">
            <div
                id="search-icon-dbh"
                class="input-group-text bg-white"
                @click="focusSearch"
            >
                <i class="fa fa-search"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from '@js/components/Logo';

    export default {
        components: {Logo},

        data: _=> ({
            search: ''
        }),

        methods: {
            focusSearch() {
                this.$refs.search.focus();
            }
        }
    }
</script>
