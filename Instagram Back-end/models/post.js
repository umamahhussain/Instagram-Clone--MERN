const mongoose=require('mongoose');
const{ObjectId}=mongoose.Schema.Types

const PostSchema=new mongoose.Schema
(
    {
        caption:{type:String,required:true},
        imageUrl:{type:String,required:true},
        PostedBy:{type:ObjectId,ref:"User"}
    }
)

mongoose.model("Post",PostSchema);