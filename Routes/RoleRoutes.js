const express =require('express');
const router = express.Router();
const roleController = require('../controller/RoleController');
// const router = require('./ProductRoutes');
router.post('/add',roleController.addRole);
router.get('/get',roleController.getAllRoles);
module.exports =router;