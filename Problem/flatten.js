function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

    let result = [];

  function deleteAray ( element ) {
     Array.isArray( element ) ? checkItems(element) : result.push(element); 
     }

  function checkItems ( array ) {
    for ( let element of array ) {
    deleteAray( element );
    }
  }

  checkItems(elements);
  return result;


}



module.exports = flatten;