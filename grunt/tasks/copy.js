'use strict';

module.exports = {
    dist: {
        files: [
            {
                expand: true,
                dot: true,
                cwd: '<%= config.client.src %>',
                dest: '<%= config.dist %>/client',
                src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                    'assets/bundle.min.js',
                    'assets/css/main.min.css',
                    'assets/files/*',
                    '!assets/files/upload/*',
                    'assets/img/**/*',
                    'assets/img/{,*/}*.{webp}',
                    'assets/js/**/*',
                    'index.html'
                ]
            }, {
                expand: true,
                cwd: '<%= config.client.src %>',
                dest: '<%= config.dist %>/client/assets/font',
                filter: 'isFile',
                flatten: true,
                src: [
                    'assets/bower/**/font/**/*'
                ]
            }, {
                expand: true,
                cwd: '<%= config.client.src %>',
                dest: '<%= config.dist %>/client/assets/fonts',
                filter: 'isFile',
                flatten: true,
                src: [
                    'assets/bower/**/fonts/**/*'
                ]
            },
            {
                expand: true,
                cwd: '.tmp/img',
                dest: '<%= config.dist %>/client/assets/img',
                src: ['generated/*']
            }, {
                expand: true,
                cwd: '.tmp/concat/assets',
                dest: '<%= config.dist %>/client/assets',
                src: ['**/*']
            }
        ]
    },
    styles: {
        expand: true,
        cwd: '<%= config.client.base %>',
        dest: '.tmp/',
        src: ['**/*.css']
    }
};