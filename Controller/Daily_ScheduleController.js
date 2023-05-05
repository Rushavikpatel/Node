// const { schema } = require('../Schema/ProductSchema');

const daily_scheduleSchema=require('../Schema/Daily_ScheduleSchema');

exports. addDaily_Schedules =(req,res)=>{
    const daily_schedule=new daily_scheduleSchema(req.body);
    daily_schedule.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding daily_schedule",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Daily_Schedule added successfully",
                data:data
            })
        }
    })
}
exports. getAllDaily_Schedules =(req,res)=>{


    daily_scheduleSchema.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching daily_schedules",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined|| data.length!=0){
                res.status(200).json({
                    message:"Daily_Schedules fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Daily_Schedules not found",
                })
            }
        }
    })
}
exports.deleteDaily_Schedule =(req,res)=>{
    const id =req.params.id
    daily_scheduleSchema.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting daily_schedule",
            })
          }
          else{
            res.status(200).json({
                message:"daily_schedule deleted successfully",
                data:success
            })
          }
        })

}
