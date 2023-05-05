const FileUploadSchema =require('../schema/FileUploadSchema')
const multer =require('multer')
const FileUpload = require('../schema/FileUploadSchema')

const storage =multer.diskStorage({
    destination:"./upload/",
    filename: function(req,file,cd){
        cd(null,file.originalname)
    }
})


const upload =multer(
    {
        storage:storage,
        limits:{
            fileSize:90000000
        },
    }
).single('File') 

exports.uploadFile =(req,res) => {

    console.log(req.file) 
    upload(req,res,(err)=>{
        if(err) {
            res.status(500).json({
                error:err,
                message:'Error uploading file'
            })
        }
        else{ 
            console.log(req.file.originalname)
            //size
            console.log(req.file.size)
            //Type
            console.log(req.file.Path)
            //abs path
            var p = path.join(__dirname,'../uploads/'+req.file.originalname)
            console.log(p)            

            if(req.file ==undefined){
                res.status(400).json({
                    message:'No file selected'
                })
            }
            else{

                const fileUpolad =new FileUpolad({
                    name:req.file.originalname,
                    size:req.file.size,
                    type:req.file.mimetype,
                    url:p
                })
                fileUpolad.save((err,data)=>{
                    if(err) {
                        res.status(500).json({
                            error:err,
                            message:'Error uploading file to do'
                        })
                    }
                    else {
                        res.status(200).json({
                            message:'File uploaded successfully',
                            file:req.file.originalname 
                        })
                    }
                // res.status(200).json({
                //     message:'File uploaded successfully',
                //     file:req.file.originalname 
                })
            }
            }

    })

}