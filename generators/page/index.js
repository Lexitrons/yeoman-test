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
          name: 'title',
          message: 'Title of Page?',
          default: true
      },
      {
          type: 'input',
          name: 'name',
          message: 'Page name?',
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
          name: 'sprint',
          message: 'Sprint Number?',
          default: 1
      }

    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    this.fs.copyTpl(
      this.templatePath('page.html'),
      this.destinationPath('page/sprint'+ this.props.sprint+'/'+ this.props.filename +'.html'),
      this.props
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
