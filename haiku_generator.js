var haiku = require('./haiku')

var structure = [generateRandom(5), generateRandom(7), generateRandom(5)];

function generateRandom(total) {
	var arr = [];
	var arrCount = 0;
	var leftOver = total;
	while(arrCount != total){
		var randomNum = Math.ceil(Math.random() * leftOver);
		leftOver -= randomNum;
		arrCount += randomNum;
		arr.push(randomNum);
	}

	return arr;
}

console.log(haiku.createHaiku(structure));