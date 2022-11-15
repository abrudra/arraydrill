const each = require('../Problem/each');
const {items} = require('../data')

function cb(item, index){
    return  item
}

each(items(),cb)

console.log(each(items(),cb))

