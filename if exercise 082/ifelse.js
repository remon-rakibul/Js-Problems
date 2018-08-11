var age = prompt('Enter your age'),
	age = Number(age);

if (age < 0) {
	console.log('error');
} else if (age === 21) {
	console.log('Happy 21st Birthday!!');
} else if (!(age % 2 === 0)) {
	console.log('Your age is odd!');
} else {
	console.log('Perfect Square!');
}