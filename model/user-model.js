import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    Image:[{
        type:String,
        default:''
    }]
  },{
    timestamps:true
  });

  
const Usermodel = mongoose.model('user',userSchema) 

export default Usermodel;