'use strict';

var path = require('path');

module.exports = function (grunt) {

    var TASK = function (task) {
        return require('./grunt/tasks/' + task);
    };

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(
        grunt, {
            useminPrepare: 'grunt-usemin',
            injector: 'grunt-asset-injector',
            run: 'grunt-run'
        }
    );

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig(
        {

            config: {
                client: {
                    base: './client',
                    src: './client'
                },
                dist: './dist'
            },

            // Project settings
            pkg: grunt.file.readJSON('package.json'),

            open: {
                server: {
                    url: 'http://localhost:4050',
                    option: {
                        delay: 500
                    }
                }
            },

            connect: {
                root : {
                    options: {
                        port: 4050,
                        hostname: '0.0.0.0',
                        base: ['client']
                    }
                }
            },

            babel: TASK('babel'), //BABEL: USE ES6
            browserify: TASK('browserify'),
            clean: TASK('clean'), // Empties folders to start fresh
            concurrent: TASK('concurrent'),// Run some tasks in parallel to speed up the build process
            copy: TASK('copy'),
            cssmin: TASK('cssmin'),
            injector: TASK('injector')(grunt),
            less: TASK('less'),
            postcss: TASK('postcss'),
            rev: TASK('rev'),
            uglify: TASK('uglify'),
            usemin: TASK('usemin'),
            useminPrepare: TASK('useminPrepare'),
            watch: TASK('watch'),
            wiredep: TASK('wiredep'),


            others: {
                buildReactApp: {
                    dev: ['injector', 'browserify:dev'],
                    ie: ['injector', 'browserify:dev', 'babel:dev'],
                    dist: ['browserify:dist', 'babel:dist', 'uglify:dist']
                },
                processCSS: {
                    dev: ['postcss:dev', 'cssmin:dev'],
                    dist: ['postcss:dist', 'cssmin:dist']
                }
            }
        }
    );

    var others = grunt.config.get('others');

    Object.keys(others).forEach(
        function (other) {
            grunt.registerTask(
                other, function (target) {
                    grunt.task.run((others[other] || [])[target] || []);
                }
            )
        }
    );


// Used for delaying livereload until after server has restarted
    grunt.registerTask(
        'wait', function () {
            grunt.log.ok('Waiting for server reload...');

            var done = this.async();

            setTimeout(
                function () {
                    grunt.log.writeln('Done waiting!');
                    done();
                },
                1500
            );
        }
    );

    grunt.registerTask(
        'serve',
        [
            'injector',
            'concurrent:server',
            'wiredep',
            'connect',
            'open',
            'watch'
        ]
    );

    grunt.registerTask(
        'build', [
            'clean:dist',
            'injector',
            'less:dist',
            'wiredep',
            'useminPrepare',
            'concat',
            'copy:dist',
            'concurrent:dist',
            'rev',
            'usemin'
        ]
    );
};