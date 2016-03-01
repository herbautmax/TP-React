'use strict';

module.exports = {
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= config.dist %>/client/assets/',
                src: ['**/*.js', '!bower/**/*.js'],
                dest: '<%= config.dist %>/client/assets/'
            }
        ]
    }
};