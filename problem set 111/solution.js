function printReverse(arr) {
	// arr.forEach(function (value, index, array) {if (index === array.length - 1) {console.log(value);}});
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

// *****************

function isUniform(arr) {
	var first = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (first !== arr[i]) {
			return false;
		}
	}
	return true;
}

// *****************

function sumArray(arr) {
	var result = null;
	arr.forEach(function(i){result += i;});
	return result;
}

// *****************

function max(arr) {
	var maxNum = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > maxNum) {
			maxNum = arr[i];
		}
	}
	return maxNum;
}
