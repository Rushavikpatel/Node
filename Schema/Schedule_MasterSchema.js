const mongoose=require ('mongoose')
const Schema = mongoose.Schema

const schedule_masterSchema =new Schema({
    
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    Schedule:{
        type:Schema.Types.ObjectId,
        ref:'schedule_type'
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'category'
    },
    startdate:{
        type:String
    },
    enddate:{
        type:String
    },
})
module.exports =mongoose.model('schedule_master2',schedule_masterSchema)