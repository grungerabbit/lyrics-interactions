var rewriteRulesSnippet = require('grunt-connect-rewrite/lib/utils').rewriteRequest;

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ugilfy: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },
		
        cssmin: {
            minify: {
                expand: true,
                cwd: '_site/lib/css',
                src: ['*.css'],
                dest: '_site/lib/css',
                ext: '.css'
            }
        },
        
		
		
        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '_site/',
                        src: ['*.html', '*/**/*.html'],
                        dest: '_site/',
                        ext: '.html'
                    }
                ]
            }
        },
        watch: {
            livereload: {
                files: [
                    '*.html',
                    '_layouts/**',
                    '_posts/**',
                    '_includes/**',
                    '_projects/**'
                ],
                tasks: ['shell:jekyllBuild'],
                options: {
                    spawn: true,
                    livereload: true
                },
            },
        }
    });

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-connect-rewrite');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-html-angular-validate');


    // Default task(s).
    grunt.registerTask('default', ['shell:jekyllServe']);
	
	grunt.registerTask('watcher', ['watch']);
	
	grunt.registerTask('prep', ['htmlmin:prod']);
};