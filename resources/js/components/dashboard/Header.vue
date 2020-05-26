<template>
    <div class="header dashboard pt-2 pb-2 mt-1">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <search-bar/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Logo from "@app/components/Logo";
    import SearchBar from "@app/components/dashboard/SearchBar";

    export default {
        components: {SearchBar, Logo},

        data: _=> ({
            show: false
        })
    }
</script>
