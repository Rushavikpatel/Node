const express =require('express');
const router = express.Router();
const schedule_masterController = require('../controller/Schedule_MasterController');
// const router = require('./ProductRoutes');
router.post('/add',schedule_masterController.addSchedule_Master);
router.get('/get',schedule_masterController.getAllSchedule_Master);
// router.put('/schedule_type/:id',schedule_typeController.updateschedule_type)
router.delete('/:id',schedule_masterController.deleteSchedule_Master)
// router.get('/user2',userController.getUserDataWithCategorytype)
router.get('/user',schedule_masterController.getSchedule_MasterWithUser)
// router.get('/user/:id',schedule_masterController.getUserData)



module.exports =router;