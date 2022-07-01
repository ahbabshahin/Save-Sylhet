const getAllData = (req, res) => {
	res.send(`All data getting`);
};

const createData = (req, res) => {
	res.send('Creating data');
};

module.exports = { getAllData, createData };
