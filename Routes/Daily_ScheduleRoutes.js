const express =require('express');
const router = express.Router();
const daily_scheduleController = require('../controller/Daily_ScheduleController');

// const router = require('./ProductRoutes');
router.post('/add',daily_scheduleController.addDaily_Schedules);
router.get('/get',daily_scheduleController.getAllDaily_Schedules);
// router.put('/schedule_type/:id',schedule_typeController.updateschedule_type)
router.delete('/:id',daily_scheduleController.deleteDaily_Schedule)

module.exports =router;