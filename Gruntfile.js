module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);
  var config = {
    app: 'app',
    dist: 'dist'
  }
  grunt.initConfig({
    config: config,
    copy: {
      dist: {
        src: '<%= config.app %>/index.html',
        dest: '<%= config.dist %>/index.html'
      }
    },
    clean: {
      dist: {
        src: '<%= config.dist%>/index.html'
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    ugligy: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-ugligy');
  grunt.registerTask('default', ['uglify']);
};