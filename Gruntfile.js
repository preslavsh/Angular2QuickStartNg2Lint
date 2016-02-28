module.exports = function(grunt) {
	grunt.initConfig({
		tslint: {
			options: {
				"rulesDirectory": "C:/Users/Presko/Desktop/angular2-quickstart/node_modules/ng2lint/dist/src/",
				"configuration": "tslint.json"
			},
			files: {
				src: [
					"app/main.ts",
					"app/app.component.ts"
				]
			}
		}
	})
	
	grunt.loadNpmTasks('grunt-tslint');

	// Default task(s).
	grunt.registerTask('default', 'tslint');
};
