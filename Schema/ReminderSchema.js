const mongoose =require('mongoose')
const Schema = mongoose.Schema

const reminderSchema =new Schema({


    date:{
        type:Date,
        require:true,
        unique:true
    },
    description:{
        type:String,
    }
},{
    timestamps:true
})
module.exports =mongoose.model('reminder',reminderSchema)