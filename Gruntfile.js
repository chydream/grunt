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
        files:{
          '<%= config.dist %>/index.html': '<%= config.app %>/index.html',
          '<%= config.dist %>/js/index.js':'<%= config.app %>/js/index.js'
        }
        // files:[
        //   {
        //     src: '<%= config.app %>/index.html',
        //     dest: '<%= config.dist %>/index.html'
        //   },
        //   {
        //     src: '<%= config.app %>/js/index.js',
        //     dest: '<%= config.dist %>/js/index.js'
        //   }
        // ]
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