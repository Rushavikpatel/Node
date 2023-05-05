const express =require('express');
const router = express.Router();
const taskController = require('../controller/TaskController');
// const router = require('./ProductRoutes');
router.post('/add',taskController.addTask);
router.get('/get',taskController.getAlltasks);
// router.put('/schedule_type/:id',schedule_typeController.updateschedule_type)
router.delete('/:id',taskController.deleteTask)

module.exports =router;