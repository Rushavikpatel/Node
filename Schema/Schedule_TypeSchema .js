const mongoose=require ('mongoose')
const Schema =mongoose.Schema;

const schedule_typeSchema =new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    }
})
module.exports =mongoose.model('schedule_type',schedule_typeSchema)