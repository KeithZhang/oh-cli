const chalk = require('chalk');
const inquirer = require('inquirer');

module.exports = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'platform',
        message: '选择你想要构建的平台？',
        choices: ['pc', 'wx', 'app']
      },
      {
        type: 'list',
        name: 'env',
        message: '选择你想要构建的环境？',
        choices: [
          'test0',
          'test1',
          'test2',
          'test3',
          'test4',
          'test5',
          'testx',
          'production'
        ]
      },
      {
        type: 'list',
        name: 'gray',
        message: '选择你想要构建的灰度环境（default表示不使用灰度）？',
        default: 'default',
        choices: ['default', 'gray1', 'gray2', 'gray3', 'gray4']
      }
    ])
    .then(answers => {
      console.log(chalk.green('结果..', JSON.stringify(answers)));
      const { platform } = answers;
      switch (platform) {
        case 'wx':
          require('./wx')(answers);
          break;
        case 'pc':
          require('./wx')(answers);
          break;
        default:
          console.log(chalk.yellow('nothing matched!'));
      }
    });
};
