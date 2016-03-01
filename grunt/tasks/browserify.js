'use strict';

module.exports = {
    options: {
        browserifyOptions: { // This worked!
            paths: [
                '<%= config.client.src %>'
            ]
        },
        transform: [require('grunt-react').browserify]
    },
    //dev: {
    //    options: {
    //        debug: true
    //    },
    //    files: {
    //        '<%= config.client.src %>/assets/bundle.min.js': '<%= config.client.src %>/app.jsx'
    //    }
    //},
    dev: {
        options: {
            debug: true,
            watch: true,
            keepAlive: true
        },
        files: {
            '<%= config.client.src %>/assets/bundle.min.js': '<%= config.client.src %>/app.jsx'
        }
    },
    dist: {
        options: {
            debug: false
        },
        files: {
            '<%= config.dist %>/client/assets/bundle.min.js': '<%= config.client.src %>/app.jsx'
        }
    }
};