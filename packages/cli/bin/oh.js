#!/usr/bin/env node

const chalk = require('chalk');
const program = require('commander');

program.version('0.0.1').usage('<command> [options]');

program
  .command('build')
  .description('build all files of the given app by oh-cli')
  .action((name, cmd) => {
    console.log('name..', name);
    console.log('cmd..', cmd);

    require('../lib/build')();
  });

program
  .command('create <app-name>')
  .description('create a new project by oh-cli')
  .option('-f, --force', 'Overwrite target derictory if it exists')
  .action((name, cmd) => {
    console.log('name..', name);
    console.log('cmd..', cmd);
  });

program.on('--help', () => {
  console.log('');
  console.log(
    `  Run ${chalk.cyan(
      'oh <command> --help '
    )} for detailed usage of given command `
  );
  console.log('');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
