
// Const variable
//
// const a = 1 * 2
// var b = 3

// b = 4

// console.log('Hello World')
// console.log(a)
// console.log(b)

// console.log('###########')

// Old way to define a function 
// Declare/define a function (not run)
// function abc() {
//     const a = 'abc asdsad'
//     // ...
//     return a
// }

// Modern JS or preferred way nowadays
// 
// functional style
// https://en.wikipedia.org/wiki/Functional_programming
//
// Function (as variables) is the first-class citizen
// https://www.javascripttutorial.net/javascript-functions-are-first-class-citizens/
var a = function () {
    // local variable 'a' in function namespace
    const a = 'abc asdsad'
    // ...

    // returns a copy (or content) of local variable a
    return a
}

// Be able to invoke a variable if it's a function
a()

// Create a global variable 'a' in global namespace
// a = 'abc'

// x = aaaaasdasd()
// x = 'abc'


// function() is the same as f()

console.log(aaaaasdasd)

// const d = f()
// console.log(d)