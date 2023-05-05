const express =require('express')
const router =express.Router();
const reminderController =require('../controller/ReminderController');
// const route = require('./ProductRoutes');


router.post('/add',reminderController.addreminder);
router.get('/get',reminderController.getAllReminder);
router.delete('/:id',reminderController.deleteReminder);
router.put('/:id',reminderController.updateReminder )


module.exports =router;