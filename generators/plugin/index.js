'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

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
          name: 'functionName',
          message: 'Name Of Function?',
          default: true
      } 

    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },
  
  _blah: function( ) {
    console.log(" this is a custom function")
  },

  writing: function () {
    let foldername;
    
    if(this.props.foldername !== false ) {
        foldername = "/" + this.props.foldername;
    } else {
        foldername = "";
    }

    this.fs.copyTpl(
      this.templatePath('plugin.txt'),
      this.destinationPath('_js/plugin/' + this.props.filename +'.jsx'),
      this.props
    );
   
    this._blah();
  },

  install: function () {
    // this.installDependencies();
  }
});
