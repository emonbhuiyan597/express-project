// src/Routes/api.js
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

// Example routes for userController
router.get('/users/create', userController.create);
router.get('/users/read', userController.read);
router.get('/users/delete', userController.delete);
router.get('/users/update', userController.update);

// Define routes for other controllers similarly

module.exports = router;
