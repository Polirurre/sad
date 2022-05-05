var data = require("./DATA/data.json");

const fs = require("fs");

/*fs.readFile('data.json', 'utf8', function (err, data) {
	if (err) throw err;
	var dataFile = JSON.parse(data);
});*/

const getBookDetailsByName = (book) => {
    return getBooksByName(book, "bookTitle");
};

const getBooksByName = (value, obj) => {
	let resultArray = [];
	object = obj;
	data.forEach((item) => {
	  //item[object] = item[object];
	  if (item[object] && item[object].includes(value)) {
		resultArray.push(item);
	  }
	});

	return resultArray;
};

module.exports = {
    getBooksByName,
    getBookDetailsByName
};