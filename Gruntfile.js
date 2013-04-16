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
			all: {
				options: {
					config: 'config.rb'
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
		}
		/*compare_size: {
			files: [ "assets/scripts/scripts.js", "assets/scripts/min/scripts.js" ],
			options: {
				compress: {
					gz: function( contents ) {
						return gzip.zip( contents, {} ).length;
					}
				},
				cache: "temp/.sizecache.json"
			}
		}*/
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.loadNpmTasks('grunt-compare-size');

	// Set task(s)
	grunt.registerTask('default', ['jshint', 'uglify', 'compass']);

};