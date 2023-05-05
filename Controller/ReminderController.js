const categorySchema = require("../schema/categorySchema");

exports.addreminder = (req, res) => {
  const addreminder = new reminderSchema(req.body);
  addreminder.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in adding reminder",
      });
    } else {
      res.status(201).json({
        message: "reminder added successfully",
        data: data,
      });
    }
  });
};

exports.getAllReminder = (req, res) => {
  reminderSchema.find((err, data) => {
    if (err) {
      res.status(404).json({
        message: "error in fetching data",
      });
    } else {
      res.status(200).json({
        message: "data fetched successfully",
        data: data,
      });
    }
  });
};
exports.deleteReminder = (req, res) => {
  const id = req.params.id;
  reminderSchemaSchema.findByIdAndDelete(id, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting reminder",
      });
    } else {
      res.status(200).json({
        message: "reminder deleted successfully",
        data: success,
      });
    }
  });
};
exports. updateReminder =(req,res)=>{
    const id =req.params.id

    reminderSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating reminder",
            })
        }
        else{
            res.status(200).json({
                message:"reminder updated successfully",
            })
        }
    })

}
