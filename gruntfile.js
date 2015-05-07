module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		coffee: {
			compile: {
				files: {
					'script.js'	: 'coffee/script.coffee'
				}
			}
		},
		sass: {
			dist: {
				files: {
					'style.css': 'sass/style.sass'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.registerTask('default',['coffee','sass']);
}