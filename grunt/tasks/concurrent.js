'use strict';

module.exports = {
    server: [
        'less:dev',
        //'buildReactApp:dev',
        'processCSS:dev'
    ],
    dist: [
        'buildReactApp:dist',
        'processCSS:dist'
    ]
};