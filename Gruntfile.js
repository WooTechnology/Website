module.exports = function(grunt) {

  grunt.initConfig({
    // minify CSS
    cssmin: {
    my_target: {
        src: 'source/css/home.css',
        dest: 'source/css/home.min.css'
      }
    },
    responsive_images: 
    {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
          // Small mobile devices
          name: 'small_mobile',
          quality: 100,
          width: 320
          },
          {
          // Medium mobile devices 
          name: 'medium_mobile',
          quality: 100,
          width: 375
          },
          {
          // Large Mobile devices 
          name: 'large_mobile',
          quality: 100,
          width: 425
          },
          {
          // Tablets
          name: 'tablets',
          quality: 100,
          width: 768
          },
          {
          // Laptops
          name: 'laptop',
          quality: 100,
          width: 800
          },
          {
          // Laptops
          name: 'large_laptop',
          quality: 100,
          width: 1600
          }

          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'source/images/',
          dest: 'images/'
        }]
      }
    },
    /* Compression */
    imagemin:
    {
      dynamic: {
        files: [{
          optimizationLevel: 3,
          expand: true,
          cwd: 'images',
          src: ['**/*.{png,jpg, gif}'],
          dest: 'static/'
        }]
      }

    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images','static'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images','static']
        },
      },
    },

    /* Copy the videos */
    copy: {
      dev: {
        files: [{
          expand: true,
          flatten: true,
          src: 'source/videos/*',
          dest: 'static/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: 'source/fixed/*',
          dest: 'static/',
          filter: 'isFile'
        },
        {
          expand: true,
          flatten: true,
          src: 'source/images/*',
          dest: 'static/',
          filter: 'isFile'
        }]
      },
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy','cssmin','responsive_images','imagemin']);

};
