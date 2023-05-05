// const { schema } = require('../Schema/ProductSchema');

const scheduleSchema = require("../Schema/Schedule_MasterSchema");

exports.addSchedule_Master = (req, res) => {
  const schedule_master = new scheduleSchema(req.body);
  schedule_master.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in adding schedule_master",
        err: err,
      });
    } else {
      res.status(201).json({
        message: "Schedule_Master added successfully",
        data: data,
      });
    }
  });
};
exports.getSchedule_MasterWithUser = (req, res) => {
  scheduleSchema
    .find()
    .populate("user")
    .exec((err, schedule) => {
      if (err) {
        res.status(500).json({
          message: "Error in getting users",
          err: err,
        });
      } else {
        res.status(200).json({
          message: "data found successfully",
          user: users,
        });
      }
    });
};


// exports. getUserData =(req,res)=>{
//     const id=req.params.id
//     scheduleSchema.findById(id,(err,data)=>{
//         if(err){
//             res.status(404).json({
//                 message:"error in feching data"
//             })
//         }
//         else{
//             res.status(200).json({
//                 message:"data fetched successfully",
//                 data:data
//             })
//         }
//     })
// }

// exports.getUserDataWithSchedule_Master = (req,res)=>{

//     userSchema.find().populate('category').populate('Schedule').exec((err,users)=>{
//     if(err){
//         res.status(500).json({
//             message:"Error in getting users",
//             err:err
//         })
//     }
//     else{
//         if(users!=null || users!=undefined || users.length!=0){
//         res.status(200).json({
//             message:"Users fetched successfully",
//             user:users
//         })
//     }
//     else{
//         res.status(404).json({
//             message:"Users not found",
//         })
//     }
//     }
//     })
// }
// exports. getScheduleMasterById =(req,res)=>{
//     var id =req.params.id

//     schedule_masterSchema.findById(id,(err,data)=>{
//         if(err){
//             res.status(404).json({
//                 message:"error in fetching data"
//             })
//         }
//     else{
//         res.status(200).json({
//             message:"data fetched successfully",
//             data:data
//         })
//     }
//     })
// }
exports.getAllSchedule_Master = (req, res) => {
  scheduleSchema
    .find()
    .populate("user")
    .populate("Schedule")
    .populate("category")
    .exec((err, data) => {
      // schedule_masterSchema.find((err,data)=>{
      if (err) {
        res.status(500).json({
          message: "Error in fetching schedule_master",
          err: err,
        });
      } else {
        if (data != null || data != undefined || data.length != 0) {
          res.status(200).json({
            message: "Schedule_master fetched successfully",
            data: data,
          });
        } else {
          res.status(404).json({
            message: "Schedule_Master not found",
          });
        }
      }
    });
};
exports.deleteSchedule_Master = (req, res) => {
  const id = req.params.id;
  scheduleSchema.findByIdAndDelete(id, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting schedule_master",
      });
    } else {
      res.status(200).json({
        message: "schedule_master deleted successfully",
        data: success,
      });
    }
  });
};
