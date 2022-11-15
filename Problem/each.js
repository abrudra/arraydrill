const {items} = require('../data')
//
function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
    let result = [];
    for(let index = 0 ; index < elements.length; index++){
      result.push(cb(elements[index]));
    
    }
    return result;
    }
    
    





module.exports = each;

// module.exports= function each(elements, cb) {
    
//     let final=[];

//     for(let value of elements){
//         final.push(cb(value))
//     }
//     return final ;
// }
