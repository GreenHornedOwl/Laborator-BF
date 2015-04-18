module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.sass'],
                tasks: ['compass:dev'],
                options: {
                  spawn: false,
                },
            },        
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css',
                    imagesPath: 'assets/img',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

