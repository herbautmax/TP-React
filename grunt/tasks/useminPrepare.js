'use strict';

module.exports = {
    html: ['<%= config.client.src %>/index.html'],
    options: {
        root: '<%= config.client.src %>/',
        dest: '<%= config.dist %>/client'
    }
};