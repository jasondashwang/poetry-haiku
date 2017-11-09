var fs = require("fs");

var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
   	   syllablesArr = [],
   	   pronounce,
   	   count,
       lineSplit


    for (var i = 0; i <= 15; i++) {
    	syllablesArr.push([]);
    }

   lines.forEach(function(line){
   	count = 0;   
    lineSplit = line.split("  ");  
    if(lineSplit[1] != undefined && (lineSplit[0].match(/\{/) === null) && (lineSplit[0].match(/\'/) === null) && (lineSplit[0].match(/[(]/) === null) && (lineSplit[0].match(/\d/) === null)){  
    	pronounce = lineSplit[1].split(' ');
    	pronounce.forEach(function(sound){
    		if (sound.match(/\d/)) {count += 1};
    	});

    	syllablesArr[count].push(lineSplit[0]);
    }
  });   
  return syllablesArr;
}


function createHaiku(structure){
	var syllablesArr = formatData(cmudictFile);
    var final = '';
	for(var z = 0; z < 3; z++){
	    var sentenceStructure = structure[z]
	    var sentence = '';
	    for (var i = 0; i < sentenceStructure.length; i++) {
	    	var syllable = sentenceStructure[i];
	    	if(typeof syllable === 'number'){
	    		sentence += syllablesArr[syllable][Math.floor(Math.random()*syllablesArr[syllable].length)] + ' ';
	    	}
	    }

	    final += sentence + '\n';
	}

	return final;
}

console.log(createHaiku([[5],[7],[5]]));

module.exports = {
  createHaiku: createHaiku,
};