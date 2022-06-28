//run this in your terminal, replacing the numbers
//node sleep_debt_calc.js/main.js myInfo --ts 3 --wnh 7.5 --wdh 7 --rh 8

const Sleeper = require('./sleeper_class.js');
const yargs = require('yargs');


const sleeper = new Sleeper()

console.log();
console.log('hello welcome to sleep debt calculator');
console.log();


const command = yargs
    .command('myInfo', 'enter your timespan, weekend hours, weekday hours, and desired hours of sleep', {
        timeSpan: {
            description: 'how many years of sleep debt do you want to calculate',
            alias: 'ts',
            type: 'number'
        },
        wkndHrs: {
            description: 'how many hours do you sleep on Saturday and Sundays',
            alias: 'wnh',
            type: 'number'
        },
        wkdayHrs: { 
            description: 'how many hours do you sleep during weekdays',
            alias: 'wdh',
            type: 'number'
        },
        reqHrs: { 
            description: 'optimal number of hours per night',
            alias: 'rh',
            type: 'number'
        }
    })
    .argv;

// console.log(command.timeSpan)
// console.log(command.wkdayHrs)
// console.log(command.wkndHrs)
// console.log(command.reqHrs)

sleeper.setTimeSpan(command.timeSpan);
sleeper.setWkdayHrs(command.wkdayHrs);
sleeper.setWkndHrs(command.wkndHrs);
sleeper.setReqHrs(command.reqHrs);

// console.log(sleeper.timeSpan)
// console.log(sleeper.wkdayHrs)
// console.log(sleeper.wkndHrs)
// console.log(sleeper.reqHrs)


// const result = sleeper.calcAvgHrs();
console.log()

console.log(`your sleep debt is ${sleeper.calcSleepDebt()} hours`);