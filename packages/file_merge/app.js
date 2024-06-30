const fs = require('fs');

function fsReadSingle(dir){
    const content = fs.readFileSync(dir,'utf-8')
    return content
}

function templateFileContent(dir, filePath, type){
    var content = fsReadSingle(dir)
    if(type === 'css'){
        content = `<style>${content}</style>`
    }
    return content
}


function replaceFile(source,str){
    var content = fsReadSingle(source)
        console.log(content)
    content = content.replace('<!-- <style> </style> -->',str)
    // console.log(content)
    fs.writeFileSync(source, content)
}


const cssPaht = './template/index.css'
const targetFile = './template/index.html'
const cssContent = templateFileContent(cssPaht, targetFile , 'css')
replaceFile(targetFile, cssContent)