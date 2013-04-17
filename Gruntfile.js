module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// linting JS
		jshint: {
			files: [
				'Gruntfile.js',
				'assets/scripts/*.js'
			]
		},
		// minifying JS
		uglify: {
			options: {
				report: 'min'
				//banner: '/* <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			all: {
				files: [
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'assets/scripts/', // Src matches are relative to this path.
						src: ['*.js'], // Actual pattern(s) to match.
						dest: 'assets/scripts/min/', // Destination path prefix.
						ext: '.js' // Dest filepaths will have this extension.
					}
				]
			}
		},
		// compiling CSS
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
		// compressing images
		imagemin: { // Task
			all: { // Target
				options: { // Target options
					optimizationLevel: 3
				},
				files: [ // Dictionary of files
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'assets/images/', // Src matches are relative to this path.
						src: ['*.png'], // Actual pattern(s) to match.
						dest: 'assets/images/', // Destination path prefix.
						ext: '.png' // Dest filepaths will have this extension.
					},
					{
						expand: true, // Enable dynamic expansion.
						cwd: 'assets/images/', // Src matches are relative to this path.
						src: ['*.jpg'], // Actual pattern(s) to match.
						dest: 'assets/images/', // Destination path prefix.
						ext: '.jpg' // Dest filepaths will have this extension.
					}
				]
			}
		},
		// compare file sizes
		compare_size: {
			files: [
				'assets/**/*.js',
				'assets/**/*.scss',
				'assets/**/*.css'
			]
		},
		// watch task to automatically generate files during development
		watch: {
			styles: {
				files: 'assets/styles/*.scss',
				tasks: ['compass', 'imagemin'],
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
	});

	// load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-compare-size');

	// set tasks
	grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'imagemin', 'compare_size']);

};