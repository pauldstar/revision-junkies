<template>
    <div class="header dashboard pt-2 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <search-bar/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "@js/components/Logo";
    import SearchBar from "@js/components/dashboard/SearchBar";

    export default {
        components: {SearchBar, Logo},

        data: _=> ({
            show: false
        })
    }
</script>
