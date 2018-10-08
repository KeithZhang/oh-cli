const inquirer = require('inquirer');

module.exports = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'platform',
        message: '选择你想要构建的平台？',
        choices: ['d2p-pc', 'd2p-wx', 'd2p-app']
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
      console.log('结果..', answers);
    });
};
