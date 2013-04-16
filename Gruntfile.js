module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'assets/scripts/*.js']
		},
		uglify: {
			all: {
				files: {
					'assets/scripts/min/scripts.js': ['assets/scripts/scripts.js']
				}
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Set task(s)
	grunt.registerTask('default', ['jshint', 'uglify', 'compass']);

};