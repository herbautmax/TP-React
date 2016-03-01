'use strict';

module.exports = function (grunt) {
    return {
        options: {},
        // Inject application script files into index.html (doesn't include bower)
        scripts: {
            options: {
                transform: function (filePath) {
                    filePath = filePath.replace('/./client', '');
                    filePath = filePath.replace('/.tmp/', '');
                    return '<script src="' + filePath + '"></script>';
                },
                starttag: '<!-- injector:js -->',
                endtag: '<!-- endinjector -->'
            },
            files: {
                '<%= config.client.src %>/index.html': [
                    ['{.tmp,<%= config.client.base %>}/assets/js/**/*.js']
                ]
            }
        },

        // Inject component less into app.less
        less: {
            options: {
                transform: function (filePath) {
                    var config = grunt.config.get('config');
                    filePath   = filePath
                        .replace('/' + config.client.src + '/assets/bower/', '')
                        .replace('/' + config.client.src + '/assets/less/', '')
                        .replace('/' + config.client.src + '/components/', '')
                        .replace('/' + config.client.src + '/views/', '')
                    ;
                    return '@import \'' + filePath + '\';';
                },
                starttag: '// injector',
                endtag: '// endinjector'
            },
            files: {
                '<%= config.client.src %>/assets/less/main.less': [
                    '<%= config.client.base %>/**/*.less',
                    '!<%= config.client.src %>/assets/bower/**/*.less'
                ]
            }
        }
    };
};