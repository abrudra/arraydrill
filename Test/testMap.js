const {items} = require('../data');

const map = require('../Problem/map');


function cb(item , index){

    return item * 3;
    
}

map(items(),cb)

console.log(map(items(),cb))