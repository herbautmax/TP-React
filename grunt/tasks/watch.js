'use strict';

module.exports = {
    injectJS: {
        files: [
            '<%= config.client.src %>/assets/js/**/*.js'
        ],
        tasks: ['injector:scripts']
    },

    less: {
        files: [
            '<%= config.client.base %>/**/*.less'
        ],
        tasks: ['injector:less', 'less:dev', 'postcss:dev']
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },

    livereload: {
        files: [
            '{<%= config.client.base %>}/**/*.css',
            '{<%= config.client.base %>}/**/*.html',
            '{<%= config.client.base %>}/**/*.js',
            '!{<%= config.client.base %>}/**/*.spec.js',
            '!{<%= config.client.base %>}/**/*.mock.js',
            '<%= config.client.base %>/**/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
            livereload: true
        }
    }
};