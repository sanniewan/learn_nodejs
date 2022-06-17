// Write two functions a, b where
//   1. a returns string
//   2. b call a to concactenate another string
// print b()

a1 = function(content_just_read) {
    return content_just_read + ' A1 Wells'
}

a2 = function(content_just_read) {
    return content_just_read + ' A2 Wells'
}

b = function(a_func) {
    console.log(a_func)
    // ...
    // ...
    // read a file
    // write into var 'content_just_read'
    var content_just_read = 'content_just_read'
    return a_func(content_just_read) + ' Fargo'
}

console.log(b(a2))

//const: unchangeable
//let: changeable, used in loops