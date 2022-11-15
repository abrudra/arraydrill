const {items} = require('../data');
const filter = require('../Problem/filter');

function cb(element){
    return element == 5 ? true : false;
}




console.log(filter(items(),cb))