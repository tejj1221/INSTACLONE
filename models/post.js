const mongoose=require("mongoose");
const schema=mongoose.Schema;
const postBlogs=new schema({
     name:{type:String,require:true},
    location:{type:String,require:true},
    likes:{type:Number,require:true},
    description: {type:String,require:true},
    postImage: {type:String,require:true},
    date: {type:String,require:true}
})
module.exports=mongoose.model("instapost",postBlogs);