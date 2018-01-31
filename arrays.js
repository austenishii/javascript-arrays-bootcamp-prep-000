var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo) {var newChocolateBars =["foo", ...chocolateBars]; return newChocolateBars}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {chocolateBars.unshift("foo"); return chocolateBars}

function addElementToEndOfArray(chocolateBars, foo) {var newChocolateBars = [...chocolateBars, "foo"]; return newChocolateBars}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {chocolateBars.push("foo"); return chocolateBars}

function accessElementInArray (chocolateBars, two) {return chocolateBars[2]}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {chocolateBars.shift(); return chocolateBars}

function removeElementFromBeginningOfArray (chocolateBars) {chocolateBars.slice(1); return chocolateBars}