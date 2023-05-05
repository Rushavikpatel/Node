// const { schema } = require('../Schema/ProductSchema');

const taskSchema=require('../Schema/TaskSchema');

exports. addTask =(req,res)=>{
    const task=new taskSchema(req.body);
    task.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding task",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Task added successfully",
                data:data
            })
        }
    })
}
exports. getAlltasks =(req,res)=>{


    taskSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching tasks",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined|| data.length!=0){
                res.status(200).json({
                    message:"Tasks fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Tasks not found",
                })
            }
        }
    })
}
exports.deleteTask =(req,res)=>{
    const id =req.params.id
    taskSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting task",
            })
          }
          else{
            res.status(200).json({
                message:"task deleted successfully",
                data:success
            })
          }
        })

}
