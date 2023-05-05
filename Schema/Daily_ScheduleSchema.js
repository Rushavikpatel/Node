const mongoose=require ('mongoose')
const { deleteDaily_Schedule } = require('../controller/Daily_ScheduleController')
const Schema = mongoose.Schema

const Daily_ScheduleSchema =new Schema({
    forkdate:{
        type: 'String',
    },
    forktime:{
        type: 'String',
    },
    schedule_master:{
        type:Schema.Types.ObjectId,
        ref:'schedule_master2'
    },
    iscomplate:{
        type:Number
    },
    priority_id:{
        type:Number
    },
    
})
module.exports =mongoose.model('daily_schedule',Daily_ScheduleSchema)