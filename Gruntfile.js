module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                compress: {
                    global_defs: {
                        "DEBUG": false
                    }
                },
                dead_code: true
            },
            target: {
                files: {
                    'js/timer.min.js': ['script/timer.js']
                }
            }
        },
        watch: {
            files: ['Gruntfile.js', './script/*'],
            tasks: ['uglify']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['uglify']);
};