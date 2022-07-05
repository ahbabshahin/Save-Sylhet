const express = require('express');
const router = express.Router();

const { getAllData, createData } = require('../controllers/info');

router.route('/').get(getAllData);
router.route('/post').post(createData);

module.exports = router;
