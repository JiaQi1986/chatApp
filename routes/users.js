
const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/users', (req, res) => {
	res.sendFile(__dirname, '../views/users.html');
});

module.exports = router;
