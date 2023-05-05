const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended:true}))

const userRoutes = require("./Routes/UserRoutes");
const categoryRoutes = require("./Routes/CategoryRoutes");
const roleRoutes = require("./Routes/RoleRoutes");
const schedule_typeRoutes = require("./Routes/Schedule_TypeRoutes ");
const FileUploadRoutes= require('./routes/FilUploadRoutes');
const Schedule_MasterRoutes = require("./Routes/Schedule_MasterRoutes");
const ReminderRoutes = require("./Routes/ReminderRoutes");
const TaskRoutes = require("./Routes/TaskRoutes");
const Daily_SchedulRoutes = require("./Routes/Daily_ScheduleRoutes");




//we have to use userRoutes in app.js

app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/schedule_master",Schedule_MasterRoutes);
app.use("/role", roleRoutes);
app.use("/schedule",schedule_typeRoutes); 
app.use('/upload',FileUploadRoutes);
app.use('/reminder',ReminderRoutes);
app.use('/task',TaskRoutes);
app.use('/daily_schedule',Daily_SchedulRoutes);




mongoose.connect("mongodb://127.0.0.1:27017/pms_node2", {}, (err) => {
  if (err) {
    console.log("error in db connections....");
  } else {
    console.log("db connected....");
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
