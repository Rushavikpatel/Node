// const { schema } = require('../Schema/ProductSchema');

const schedule_typeSchema=require('../Schema/Schedule_TypeSchema ');

exports. addSchedule_Type =(req,res)=>{
    const schedule_type=new schedule_typeSchema(req.body);
    schedule_type.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding schedule_type",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Schedule_Type added successfully",
                data:data
            })
        }
    })
}
exports. getAllSchedule_Types =(req,res)=>{


    schedule_typeSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching schedule_types",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined|| data.length!=0){
                res.status(200).json({
                    message:"Schedule_Types fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Schedule_Types not found",
                })
            }
        }
    })
}
exports.deleteSchedule_Type =(req,res)=>{
    const id =req.params.id
    schedule_typeSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting schedule_type",
            })
          }
          else{
            res.status(200).json({
                message:"schedule_type deleted successfully",
                data:success
            })
          }
        })

}
