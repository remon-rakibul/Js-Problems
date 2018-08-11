/*function isEven (num) {
	if (num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}*/

function isEven (num) {
	return num % 2 === 0;
}

// function factorial (num) {
// 	if (num === 0) {
// 		return 1;
// 	} else {
// 		var solution = 1;
// 		for (var x = num; x > 0; x--) {
// 			solution *= x;
// 		}
// 		return solution;
// 	}
// }

function factorial (num) {
	var solution = 1;
	for (var x = num; x > 0; x--) {
			solution *= x;
	}
	return solution;
}

// function factorial (num) {
// 	var solution = 1;
// 	for (var x = num; x > 0; x--) {
// 		solution *= x;
// 	}
// 	return solution;
// }



function kebabToSnake (str) {
	var newStr = str.replace(/-/g, '_');
	return newStr;
}