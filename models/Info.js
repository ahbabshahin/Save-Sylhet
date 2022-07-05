const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
	areaName: {
		type: String,
		required: [true, 'Area name must be provided'],
	},

	areaAddress: {
		type: String,
		required: [true, 'Area address must be provided'],
	},

	totFamily: {
		type: Number,
	},

	gotHelp: {
		type: Number,
	},

	rationAmountPerFamily: {
		type: Number,
	},

	helpingDate: {
		type: Date,
	},
});

module.exports = mongoose.model('Info', infoSchema);
