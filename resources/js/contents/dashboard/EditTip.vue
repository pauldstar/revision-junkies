<template>
    <form-page :logo="false" :large="true">
        <template #header>
            <h4 class="card-title">{{ $route.meta.title }}</h4>
        </template>

        <form @submit.prevent="submit" class="container">
            <div class="row">

                <div class="form-row col-12 col-sm-6">
                    <div class="form-group col-12">
                        <label class="mr-sm-2">Title</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-12">
                        <label class="mr-sm-2">Description</label>
                        <textarea class="form-control" rows="4"/>
                    </div>
                    <div class="form-group col-12">
                        <label class="mr-sm-2">External URL</label>
                        <input type="text" class="form-control" placeholder="Article, Blog Post, Pinterest...">
                    </div>
                </div>

                <div class="form-row col-12 col-sm-6">
                    <div class="form-group col-12">
                        <label class="mr-sm-2">Main Image</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group col-12">
                        <label class="mr-sm-2">Description</label>
                        <textarea class="form-control" rows="4"/>
                    </div>
                    <div class="form-group col-12">
                        <label class="mr-sm-2">External URL</label>
                        <input type="text" class="form-control" placeholder="Article, Blog Post, Pinterest...">
                    </div>
                </div>

                <div class="text-center col-12">
                    <button @click.prevent class="btn btn-warning float-left pl-5 pr-5"># Add Tag</button>
                    <button type="submit" class="btn btn-dark float-right pl-5 pr-5">Save</button>
                </div>

            </div>
        </form>
    </form-page>
</template>

<script>
    import formPage from '@js/components/FormPage';

    export default {
        components: {formPage},

        methods: {
            submit() {
                this.$router.push('/dashboard/verify-step-6');
            }
        }
    }
</script>
