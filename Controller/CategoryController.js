const categorySchema = require("../schema/categorySchema");

exports.addcategory = (req, res) => {
  const addcategory = new categorySchema(req.body);
   addcategory.save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in adding category",
      });
    } else {
      res.status(201).json({
        message: "category added successfully",
        data: data,
      });
    }
  });
};

exports.getAllCategory = (req, res) => {
  categorySchema.find((err, data) => {
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
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  categorySchema.findByIdAndDelete(id, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting category",
      });
    } else {
      res.status(200).json({
        message: "category deleted successfully",
        data: success,
      });
    }
  });
};
exports. updateCategory =(req,res)=>{
  const id =req.params.id

  categorySchema.findByIdAndUpdate(id,req.body,(err,success)=>{
      if(err){
          res.status(404).json({
              message:"error in updating category",
          })
      }
      else{
          res.status(200).json({
              message:"category updated successfully",
          })
      }
  })

}
