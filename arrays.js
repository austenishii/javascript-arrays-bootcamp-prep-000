var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo) {["foo", ...chocolateBars]; return chocolateBars}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {chocolateBars.unshift("foo"); return chocolateBars}
