const express =require('express');
const router = express.Router();
const schedule_typeController = require('../controller/Schedule_TypeController ');
// const router = require('./ProductRoutes');
router.post('/add',schedule_typeController.addSchedule_Type);
router.get('/get',schedule_typeController.getAllSchedule_Types);
// router.put('/schedule_type/:id',schedule_typeController.updateschedule_type)
router.delete('/:id',schedule_typeController.deleteSchedule_Type)

module.exports =router;