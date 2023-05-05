const express =require('express')
const router =express.Router();
const categoryController =require('../controller/CategoryController');
// const route = require('./ProductRoutes');


router.post('/add',categoryController.addcategory);
router.get('/get',categoryController.getAllCategory);
router.delete('/:id',categoryController.deleteCategory);
router.put('/:id',categoryController.updateCategory)


module.exports =router;