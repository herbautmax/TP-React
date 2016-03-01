'use strict';

module.exports = {
    dist: {
        files: {
            src: [
                '<%= config.dist %>/client/**/*.js',
                '<%= config.dist %>/client/**/*.css',
                '<%= config.dist %>/client/assets/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    }
};