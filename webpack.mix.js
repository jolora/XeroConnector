let mix = require('laravel-mix');

mix.setPublicPath('dist').js('resources/js/tool.js', 'js').vue();

// mix.sass('resources/sass/tool.scss', 'css');
