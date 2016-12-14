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
          name: 'classname',
          message: 'Class of Module?',
          default: true
      },
      {
          type: 'input',
          name: 'name',
          message: 'Name of module?',
          default: true
      },
      {
          type: 'input',
          name: 'notes',
          message: 'Any notes or info',
          default: true
      },
      {
          type: 'input',
          name: 'foldername',
          message: 'Name of Folder?',
          default: false
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
      this.templatePath('module.txt'),
      this.destinationPath('modules' + foldername +'/'+ this.props.filename +'.html'),
      { 
        classname: this.props.classname,
        notes: this.props.notes,
        filename: this.props.filename,
        foldername: this.props.foldername,
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('_scss.txt'),
      this.destinationPath('css/modules' + foldername +'/_'+ this.props.filename +'.scss'),
      this.props
    );
   
  },

  install: function () {
    // this.installDependencies();
  }
});
