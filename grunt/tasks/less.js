'use strict';

module.exports = {
    options: {
        paths: [
            '<%= config.client.src %>/assets/bower',
            '<%= config.client.src %>/assets/less',
            '<%= config.client.src %>/assets/less/components',
            '<%= config.client.src %>/assets/less/resources',
            '<%= config.client.src %>/components',
            '<%= config.client.src %>/views'
        ]
    },
    dist: {
        files: {
            '<%= config.dist %>/client/assets/css/main.min.css': '<%= config.client.src %>/assets/less/main.less'
        }
    },
    dev: {
        files: {
            '<%= config.client.src %>/assets/css/main.min.css': '<%= config.client.src %>/assets/less/main.less'
        }

    }
};