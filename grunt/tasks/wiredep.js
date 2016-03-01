'use strict';

module.exports = {
    target: {
        src: '<%= config.client.src %>/index.html',
        options: {
            directory: "client/assets/bower"
        }
    },
    options: {
        fileTypes: {
            html: {
                detect: {
                    js: '<script src={{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="{{filePath}}"/>'
                },
                replace: {
                    js: '<script src="/{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="/{{filePath}}"/>'
                }
            }
        },
        overrides: {
            'js-xlsx': {
                'main': 'dist/xlsx.full.min.js'
            }
        }
    }
};