// What this Gruntfile does:
// * uses `node-bourbon` and `node-neat` 
// * uses `live-reload` on css changes 
// * uses `auto-prefixer` (bourbon is removing that functionality)
// * uses `browserSync` if you enable it (in the Gruntfile) 
// * references libraries via npm, when packages exist 
// * concats/compresses js/css in development 

// How to use it:
// * install libraries with `npm` - or, if no package, in `static/lib`
// * add path to .js libraries to `concat:dist:src` (or)
// * import .css/.scss libraries to `main.scss`

'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // https://quickleft.com/blog/grunt-js-tips-tricks/
    
    // these are the task definitions
    sass: {
      options: {
        includePaths: require('node-neat').includePaths,
        outputStyle: 'compressed'
        },
      dist: {
        files: {
          'static/css/main.min.css' : 'sass/main.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9'],
        map: true
      },
      dist: {
        src: 'static/css/main.css',
        dest: 'static/css/main.css' 
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
            src : [
              '.build/static/css/main.css',
              '.build/*.html'
            ]
        },
        options: {
          watchTask: true,
          server: '.build',
          tunnel: 'preview'    
        }
      }
    },
    
    concat: {
      dist: {
        src: [
              'node_modules/jquery/dist/jquery.js',
              'node_modules/enquire.js/dist/enquire.js',
              'static/javascript/lib/kibo.js',
              'static/javascript/main.js'
              ],
        dest: 'static/javascript/scripts.concat.js'
      },
      modernize: {
        src: [
              'node_modules/html5shiv/dist/html5shiv.js',
              'node_modules/respond.js/dest/respond.src.js'
              ],
        dest: 'static/javascript/modernize.js',
          }
    },

    uglify: {
      my_target: {
        files: {
          'static/javascript/scripts.min.js': 'static/javascript/scripts.concat.js'
        }
      }
    },

    // here is where the tasks above get called when files change
    watch: { 
      js: { 
        files:  'static/javascript/main.js',
        tasks: ['concat', 'uglify', 'build'],
         nonull: true,
      },
      sass: {
        files: ['sass/*.scss','sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'build-static']
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');
 
  // NEVER REMOVE THESE LINES, OR ELSE YOUR PROJECT MAY NOT WORK
  require('./options/generatorOptions.js')(grunt);
  grunt.loadTasks('tasks');
 
  // Rename webhook's default task so we can compile css first and then run it
  grunt.renameTask('default', 'wh-default');
  grunt.registerTask('default', ['sass', 'autoprefixer', 'wh-default']); // without browserSync
  // grunt.registerTask('default', ['sass', 'autoprefixer', 'browserSync', 'wh-default']); // with browserSync

  };