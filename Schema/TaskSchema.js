const mongoose=require ('mongoose')
const Schema =mongoose.Schema;

const taskSchema =new Schema({
    taskname:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    completiontime:{
        type:'String'
    },
    priority:{
        type:Number
    },
   
    dailySchedule:{
        type:Schema.Types.ObjectId,
        ref:'daily_schedule'
    }

})
module.exports =mongoose.model('task',taskSchema)