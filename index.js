
//////////////////// SOLUTION ON GITHUB ///////////////
function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }


//// why use .toLowerCase()???
// function findMatching(drivers, string) {
//     return drivers.filter(function(y) {
//         return y.toLowerCase().indexOf(string.toLowerCase())})
// }

////////// DON'T HAVE TO CONSOLE.LOG() //////////////
// console.log(findMatching(drivers, 'Bobby'));
// console.log(findMatching(drivers, 'Sammy'));

///// what does it mean by querying the array????? like uhhhh?? 
function fuzzyMatch(drivers, query) {
    return drivers.filter(function(x) {
        return x.toLowerCase().indexOf(query.toLowerCase()) === 0}
    )  
}


function matchName(drivers, obj) {
    return drivers.filter(drivers => drivers.name === obj);
}
