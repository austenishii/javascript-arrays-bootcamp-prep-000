chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
function addElementToBeginningOfArray(chocolateBars, twix){["twix", ...chocolateBars]; return chocolateBars}
fucntion destructivelyAddElementToBeginningOfArray() {chocolateBars.unshift("twix"); return chocolateBars}