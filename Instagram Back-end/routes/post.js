const express=require('express')
const router= express.Router();
const mongoose=require('mongoose');
const Post=mongoose.model("Post")
const token=require('../middleware/token')

router.post('/createpost',token,(req,res)=>
{
    const {caption,imageUrl}=req.body;
    if(!caption || !imageUrl)
    {
        return res.status(422).json({error:"Please add all required fields"});
    }

    req.user.password=undefined;
    req.user.email=undefined;

    const post= new Post
    (
        {
            caption,
            imageUrl,
            PostedBy:req.user
        }
    )

    post.save()
    .then(result=>{
        res.json({post:result})
    })
    .catch(err =>
        {
            console.log(err)
        }
    )

})

router.get('/allposts',token,(req,res)=>
{
    Post.find().populate("PostedBy","username")
    .then(posts=>
    {
        res.json({posts});
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/myposts',token,(req,res)=>
{
    Post.find({PostedBy:req.user._id}).populate("PostedBy","username")
    .then(mypost=>
        {
            res.json({mypost});
        })
        .catch(err=>
            {
                console.log(err);
            })
})

module.exports=router;