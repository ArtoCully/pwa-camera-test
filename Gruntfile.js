module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    babel: {
      options: {
        'sourceMap': true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: [{
          'expand': true,
          'cwd': 'public/js',
          'src': ['*.js'],
          'dest': 'public/js-compiled/',
          'ext': '-compiled.js'
        }]
      }
    },
    uglify: {
      all_src : {
        options : {
          sourceMap : true,
          sourceMapName : 'dist/sourceMap.map'
        },
        src : 'public/js-compiled/**/*-compiled.js',
        dest : 'dist/js/main.js'
      }
    },
    htmlmin: {                                     
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'dist/index.html': 'public/index.html',
        }
      },
    }
  });

  // Load the plugin that provides the "babel" task.
  grunt.loadNpmTasks('grunt-babel');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin', 'babel', 'uglify']);
};