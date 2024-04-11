import mongoose from "mongoose";

const user = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
    dob:{
        type:String,    
        required:true
    },
   

})

export default mongoose.model("user",user)