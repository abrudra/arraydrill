const {items} = require('../data')
const find = require('../Problem/find')

function cb(element){
    
    return element === 5 ? true : false;
}

console.log(find(items(),cb))