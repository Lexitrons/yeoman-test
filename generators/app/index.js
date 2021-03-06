'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
 

module.exports = yeoman.Base.extend({
  prompting: function () {
    var prompts = [{
        type: 'input',
        name: 'title',
        message: 'What is this ' + chalk.red('Project Title') + ' ?',
        default: true
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is this project ' + chalk.red('Project Number') + ' ?',
            default: true
        }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
        this.props = props;
        this.log('app name', props.title);
        this.log('cool feature', props.number);

    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
    this.templatePath('index.html'),
    this.destinationPath('index.html'),
    this.props
    );
  },

  install: function () {
    // this.installDependencies();
  }
});
