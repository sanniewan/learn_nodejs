// Write two functions a, b where
//   1. a returns string
//   2. b call a to concactenate another string
// print b()

a = function() {
    return 'Wells'
}

b = function() {
    return a() + ' Fargo'
}


console.log(b())

//const: unchangeable
//let: changeable, used in loops