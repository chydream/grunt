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
      dist_html: {
        // files:{
        //   '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
        //   '<%= config.dist %>/js/index.js':'<%= config.app %>/js/index.js'
        // }
        files:[
          // {
          //   expand: true,
          //   cwd: '<%= config.app %>/',
          //   src: '*.html', // **/*.js
          //   dest: '<%= config.dist %>/',
          //   ext: '.min.html', //.js
          //   extDot: 'first', //last
          //   flatten: false,
          //   rename: function(dest,src){
          //     return dest + 'js/' + src
          //   }
          // },
          {
            src: '<%= config.app %>/index.html',
            dest: '<%= config.dist %>/index.html'
          },
          // {
          //   src: '<%= config.app %>/js/index.js',
          //   dest: '<%= config.dist %>/js/index.js'
          // }
        ]
      },
      // dist_js: {
      //   src: '<%= config.app %>/js/index.js',
      //   dest: '<%= config.dist %>/js/index.js'
      // },
      // dist: {
      //   src: '<%= config.app %>/index.html',
      //   dest: '<%= config.dist %>/index.html'
      // }
    },
    clean: {
      dist: {
        // src: ['<%= config.dist%>/index.html','<%= config.dist%>/js/index.js']
        src: ['<%= config.dist%>/**/*'],
        // filter: 'isFile'
        filter: function(filepath){
          return (!grunt.file.isDir(filepath));
        },
        // nonull
        dot: true,
        matchBase: true,
        expand: true
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'app/index.html',
        dest: 'build/<%= pkg.name %>.html'
      }
    }
  })
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};