module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'assets/scripts/*.js']
		},
		uglify: {
			options: {
				report: 'min'
			},
			all: {
				files: {
					'assets/scripts/min/scripts.js': ['assets/scripts/scripts.js']
				}
			}
		},
		compass: {
			all: {
				options: {
					outputStyle: 'compressed',
					httpPath: '/',
					cssDir: 'assets/styles/min',
					sassDir: 'assets/styles',
					imagesDir: 'assets/images',
					javascriptsDir: 'assets/scripts'
				}
			}
		},
		watch: {
			styles: {
				files: 'assets/styles/*.scss',
				tasks: ['compass'],
				options: {
					interrupt: true
				}
			},	
			scripts: {
				files: 'assets/scripts/*.js',
				tasks: ['jshint', 'uglify'],
				options: {
					interrupt: true
				}
			}			
		},
		compare_size: {
			files: [ 'assets/**/*.js', 'assets/**/*.scss', 'assets/**/*.css']
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-compare-size');

	// Set task(s)
	grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'compare_size']);

};