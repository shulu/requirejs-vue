/**
 * @file
 * @author Yangholmes 2020-07-13
 */
/* eslint-disable no-undef */

requirejs.config({
    baseUrl: '.',
    paths: {
        root: 'src',
        config: 'src/config',
        components: 'src/components',
        template: 'template',
        style: 'css',
        text: 'libs/text',
        axios: 'libs/axios.min',
        vue: 'libs/vue',
        'vue-router': 'libs/vue-router.min'
    },
    map: {
        '*': {
            css: 'libs/css.min'
        }
    },
    shim: {}
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['root/config', 'root/index']);
