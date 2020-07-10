const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

let extractables = [
    'vue',
    'bootstrap-vue',
    'portal-vue',
    'vue-carousel',
    'vue-router',
    'vuelidate'
];

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .extract(extractables)
    .sourceMaps()
    .webpackConfig({
        resolve: {
            alias: {
                '@js': path.resolve(__dirname, 'resources/js'),
                '@sass': path.resolve(__dirname, 'resources/sass')
            }
        }
    });

mix.browserSync({
    proxy: 'localhost'
});

if (mix.inProduction()) {
    mix.version();
}
