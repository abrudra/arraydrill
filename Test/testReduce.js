

const reduce = require("../Problem/reduce");
const {items} = require ("../data") ;

function cb(acc,curr){
    return acc += curr
}



console.log(reduce(items(),cb,0))
