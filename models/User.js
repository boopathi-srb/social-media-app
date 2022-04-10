const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const UserSchema=new mongoose.Schema({
  username:{
    type:String,
    require:true,
    min:3,
    max:20,
    unique:true
  },
  email:{
    type:String,
    required:true,
    max:50,
    unique:true
  },
  password:{
    type:String,
    required:true,
    min:6
  },
  profilepic:{
    type:String,
    default:" "
  },
  coverpic:{
    type:String,
    default:" "
  },
  followers:{
    type:Array,
    default:[]
  },
  followings:{
    type:Array,
    default:[]
  },
  isAdmin:{
    type:Boolean,
    default:[]
  }
},
{timestamps:true}
);

module.exports=mongoose.model("User", UserSchema);