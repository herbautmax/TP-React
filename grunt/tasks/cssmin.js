'use strict';

module.exports = {
    dev: {
        files: [
            {
                expand: true,
                cwd: '<%= config.client.src %>/assets/css',
                src: ['**/*.css'],
                dest: '<%= config.client.src %>/assets/css'
            }
        ]
    },
    dist: {
        files: [
            {
                expand: true,
                cwd: '<%= config.dist %>/client/assets/css',
                src: ['**/*.css'],
                dest: '<%= config.dist %>/client/assets/css'
            }
        ]
    }
};