'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { spawn } = require('child_process')
module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the transcendent ${chalk.red('generator-to-learn')} generator!`
      )
    );
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'what is the app name',
        default: this.appname // 默认为当前文件夹名称
      },
      {
        type: 'input',
        name: 'description',
        message: 'what is the app description',
        default: ''
      },
      {
        type: 'input',
        name: 'author',
        message: 'what is the author name',
        default: ''
      },
    ];
    this.answers = await this.prompt(prompts);
  }

  initializing() { }

  configuring() { }

  writing() {
    // 1.创建目录结构
    const directories = [
      'src/views',
      'src/utils',
      'src/config',
      'src/services'
    ];
    directories.forEach((dir) => {
      if (dir.includes("views")) {
        this.fs.copy(
          this.templatePath(`${dir}/*`), // 您的初始模板文件
          this.destinationPath(`${dir}`) // 假设您想要创建一个初始的JavaScript文件
        );
      } else {
        this.fs.copy(
          this.templatePath(`${dir}/index.ts`), // 您的初始模板文件
          this.destinationPath(`${dir}/index.ts`) // 假设您想要创建一个初始的JavaScript文件
        );
      }
    });
    const tmpl = 'index.ts';
    this.fs.copy(this.templatePath(tmpl), this.destinationPath('src/index.ts'));
    // 2.创建辅助文件
    const helpFiles = ['README.md', '.gitconfig', '.gitignore', '.npmrc', '.env', '.eslintrc.json', '.eslintignore', '.commitlint.config.ts', 'tsconfig.json', 'package.json']
    helpFiles.forEach(dir => {
      this.fs.copy(this.templatePath(dir), this.destinationPath(dir));
    })
    // 3.配置husky no husky install do this
    // this.fs.copy(this.templatePath('.husky/*'), this.destinationPath('.husky'));

    //todo 4.创建pkgjson
    const pkgJson = {
      name: this.answers.name,
      version: "1.0.0",
      description: this.answers.description,
      author: this.answers.author
    }
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
  }

  install() {
    if (!this.fs.exists(this.destinationPath('.git'))) {
      this.spawnCommandSync('git', ['init']);
    }
    this.npmInstall()
  }

  end() {
    // 添加 commit-msg 钩子
    this.spawnCommandSync('npx', ['husky', 'add', '.husky/commit-msg', 'npx --no-install commitlint --edit "$1"']);

    // 添加 pre-commit 钩子
    this.spawnCommandSync('npx', ['husky', 'add', '.husky/pre-commit', 'npx --no-install lint-staged']);
  }
};
