'use strict';

module.exports = {
    dist: {
        src: '<%= config.dist %>/client/assets/bundle.min.js',
        dest: '<%= config.dist %>/client/assets/bundle.min.js'
    },
    dev: {
        retainLines: true,
        src: '<%= config.client.src %>/assets/bundle.min.js',
        dest: '<%= config.client.src %>/assets/bundle.min.js'
    }
};