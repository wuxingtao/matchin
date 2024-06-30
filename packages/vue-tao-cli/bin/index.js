#!/usr/bin/env node

console.log('hello tao CLI');

const program = require('commander');

// 定义版本和参数选项
program
    .version('1.0.0', '-v, --version')
    .option('-i,--init', 'init something')
    .option('-g, --generate', 'generate something')
    .option('-r, --remove', 'remove something')
    .command('init <dir>', 'generate a new project')
    .action(function(dir,cmd){
        console.log(dir,cmd)
    })
    // .parse(process.argv);


// 必须在.parse()之前，因为node的emit()是即时的
program.on('--help', function(){
    console.log('  Examples:');
    console.log('');
    console.log('    this is an example');
    console.log('');
});

program.parse(process.argv);

if (program.init) {
    console.log('init something');
}

if (program.generate) {
    console.log('generate something test');
}

if (program.remove) {
    console.log('remove something');
}
