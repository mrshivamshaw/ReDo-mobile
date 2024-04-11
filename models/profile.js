import mongoose from "mongoose";

const user = new mongoose.Schema({
    firstName:{
        type:String
    },
    
    lastName:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    dob:{
        type:String
    },
})

export default mongoose.model("user",user)