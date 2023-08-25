// Code your solution in this file!
const returnFirstTwoDrivers = ([first, sec, ...rest]) => [first, sec];

const returnLastTwoDrivers = (arr) => arr.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (a) => (b) => a * b;

const fareDoubler = (a) => createFareMultiplier(a)(2);

const fareTripler = (a) => createFareMultiplier(3)(a);

const selectDifferentDrivers = (arr, func) => func(arr);
