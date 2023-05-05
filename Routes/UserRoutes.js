const express =require('express')
const router =express.Router()
const userController =require('../controller/UserController')

router.get('/user0',userController.getUserDataWithRole)


//  router.post('/user',userController.addUser)
router.get('/user/:id',userController.getUserById)
//  router.get('/user',userController.getUserData)
router.delete('/user/:id',userController.deleteUser)
router.put('/user/:id',userController.updateUser)
router.post('/user/login',userController.loginUser)
 router.post('/user',userController.registerUser)
module.exports =router