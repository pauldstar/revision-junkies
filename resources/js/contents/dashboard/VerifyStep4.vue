<template>
    <form-page :logo="false">
        <form @submit.prevent="$router.push('/dashboard/add-debit-card')" class="identity-upload">
            <div class="identity-content">
                <span class="icon"><i class="fa fa-check"></i></span>
                <h4>Identity Verified</h4>
                <p>Congrats! your identity has been successfully verified and your investment
                    limit has been increased.</p>
            </div>

            <div class="text-center mb-4">
                <button type="submit" class="btn btn-success pl-5 pr-5">Continue</button>
            </div>
        </form>
    </form-page>
</template>

<script>
    import formPage from '@js/components/FormPage';

    export default {
        components: {formPage}
    }
</script>
