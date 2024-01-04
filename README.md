# generator-simple-script

`generator-simple-script` is a Yeoman-based scaffolding generator designed to assist developers in quickly starting and building automated scripts or small program projects.

## Installation

First, ensure that you have [Node.js](https://nodejs.org/) installed.

Next, install [Yeoman](http://yeoman.io) and `generator-simple-script` via [npm](https://www.npmjs.com/) (assuming you have pre-installed node.js).

```bash
npm install -g yo
git clone https://github.com/flamintune/generator-simple-script.git
cd generator-simple-script
npm install
npm link
```

Then generate your new project:
```bash
yo simple-script
```

## Features

- Quickly scaffold the framework for automation scripts based typescirpt.
- Integrates with ESLint, Prettier, and Husky to ensure code quality and style consistency, and to automate tasks via Git hooks.
- Simple configuration, easy to understand and use
- Customizable templates to suit specific development needs

## Thoughts
- [ ] Add more configuration options
- [ ] Support more types of automated tasks
- [ ] Provide an interactive CLI to simplify the workflow

## Contribution

If you are interested in helping to improve generator-simple-script, free to submit your pull requests or any issues
