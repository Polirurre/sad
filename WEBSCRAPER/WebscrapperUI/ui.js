"use strict";
const React = require("react");
const { Text, Box } = require("ink");
const TextInput = require("ink-text-input").default;

const Gradient = require('ink-gradient');
const BigText = require('ink-big-text');

const bar = require("./search");

const App = () => {
		
	const [Title, setTitle] = React.useState("");
	const [bookTitle, setBook] = React.useState("");
	const [bookCategory, setCategory] = React.useState("");
	const [bookPrice, setPrice] = React.useState("");
	const [bookNnoAvailable, setNoAvailable] = React.useState("");
	const [bookUpc, setUpc] = React.useState("");

	
	
	React.useEffect(() => {
		
		const getBook = bar.getBookDetailsByName(Title);
		setBook(getBook[0].bookTitle);
		setCategory(getBook[0].bookCategory);
		setPrice(getBook[0].bookPrice);
		setNoAvailable(getBook[0].noAvailable);
		setUpc(getBook[0].upc);
		
	});

	return (
		<Box flexDirection="column">
			<Gradient name="morning">
        <BigText font="3d"  text="Book Scraper" />
      </Gradient>
	  
			<TextInput
				placeholder="Enter your book..."
				value={Title}
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