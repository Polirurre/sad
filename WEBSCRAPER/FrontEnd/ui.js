"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const TextInput = require("ink-text-input").default;

const fs = require("fs");

const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');



const App = () => {
	
	//var dataFile = require('./data.json');
	
	/*fs.readFile('data.json', 'utf8', function (err, data) {
		if (err) throw err;
		var dataFile = JSON.parse(data);
	});*/
	
	const [bookTitle, setTitle] = React.useState("");
	const [bookCategory, setCategory] = React.useState("");
	const [bookPrice, setPrice] = React.useState("");
	const [bookNnoAvailable, setNoAvailable] = React.useState("");
	const [bookUpc, setUpc] = React.useState("");

	

	
	React.useEffect(() => {
		const getBookDetailsByTitle = (Title) => {
			return getBooksByObject(Title, "bookTitle");
		};

		setCategory(dataFile[bookIndex].bookCategory);
		setPrice(dataFile[bookIndex].bookPrice);
		setNoAvailable(dataFile[bookIndex].noAvailable);
		setUpc(dataFile[bookIndex].upc);
		
	});

	return (
		<Box flexDirection="column">
			<Gradient name="morning">
        <BigText font="3d"  text="Book Scraper" />
      </Gradient>
	  
			<TextInput
				placeholder="Enter your book..."
				value={bookTitle}
				onChange={setTitle}
			/>

			<Box flexDirection="column" borderStyle="double">
				<Box>
					<Box width="50%">
              			<Text>Title</Text>
					</Box>

					<Box width="30%">
						<Text>Category</Text>
					</Box>

					<Box width="20%">
						<Text>Price</Text>
					</Box>

					<Box width="20%">
						<Text>nº Available</Text>
					</Box>

					<Box width="30%">
						<Text>upc</Text>
					</Box>

				</Box>
				<Box>
					<Box width="50%">
						<Text>{bookTitle}</Text>
					</Box>

					<Box width="30%">
						<Text>{bookCategory}</Text>
					</Box>

					<Box width="20%">
						<Text>{bookPrice}</Text>
					</Box>

					<Box width="20%">
						<Text>{bookNnoAvailable}</Text>
					</Box>

					<Box width="30%">
						<Text>{bookUpc}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

module.exports = App;