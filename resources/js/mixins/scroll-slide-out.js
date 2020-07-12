import _ from 'lodash';

export default {
    data: _ => ({
        scrollingUp: false,
        slideEnabled: false,
        lastScroll: 0,
        screenWidth: window.matchMedia('(max-width: 576px)')
    }),

    mounted() {
        this.toggleSlideEnabled();
        this.screenWidth.addEventListener('change', this.toggleSlideEnabled);
    },

    destroyed() {
        this.screenWidth.removeEventListener('change', this.toggleSlideEnabled);
        this.slideEnabled && window.removeEventListener('scroll', this.toggleSlideOut);
    },

    computed: {
        slideIn() {
            return this.slideEnabled ? !this.scrollingUp : true;
        }
    },

    methods: {
        toggleSlideEnabled() {
            if (this.screenWidth.matches) {
                if (! this.slideEnabled) {
                    this.slideEnabled = true;
                    window.addEventListener('scroll', this.toggleSlideOut);
                }
            } else {
                this.slideEnabled = false;
                window.removeEventListener('scroll', this.toggleSlideOut);
            }
        },

        toggleSlideOut: _.debounce(function () {
            this.scrollingUp = this.lastScroll < window.pageYOffset;
            this.lastScroll = window.pageYOffset;
        }, 200, {leading: true})
    }
}
