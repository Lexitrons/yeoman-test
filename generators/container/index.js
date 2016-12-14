'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    // this.log(yosay(
    //   'Welcome to the badass ' + chalk.red('generator-fetoolkit') + ' generator!'
    // ));

    var prompts = [
      {
          type: 'input',
          name: 'filename',
          message: 'Name of File',
          default: true
      },
      {
          type: 'input',
          name: 'reactClass',
          message: 'React Class?',
          default: true
      } 

    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    let foldername;
    
    if(this.props.foldername !== false ) {
        foldername = "/" + this.props.foldername;
    } else {
        foldername = "";
    }

    this.fs.copyTpl(
      this.templatePath('container.txt'),
      this.destinationPath('_js/containers/' + this.props.filename +'.js'),
      this.props
    );

    mkdirp.sync('_js/components/'+ this.props.reactClass+'/');
   
  },

  install: function () {
    // this.installDependencies();
  }
});
