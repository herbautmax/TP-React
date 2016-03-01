'use strict';

module.exports = {
    html: ['<%= config.dist %>/client/**/*.html'],
    css: ['<%= config.dist %>/client/**/*.css'],
    js: ['<%= config.dist %>/client/**/*.js'],
    options: {
        assetsDirs: [
            '<%= config.dist %>/client',
            '<%= config.dist %>/client/assets/img'
        ],
        patterns: {
            js: [
                [
                    /(assets\/img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm,
                    'Update the JS to reference our revved images'
                ]
            ],
            css: [
                [
                    /(assets\/img\/.*?\.(?:gif|jpeg|jpg|png|webp|svg))/gm,
                    'Update the CSS to reference our revved images'
                ]
            ]
        }
    }
};