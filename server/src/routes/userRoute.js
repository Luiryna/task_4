  
const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/list',UserController.list);

module.exports = router;