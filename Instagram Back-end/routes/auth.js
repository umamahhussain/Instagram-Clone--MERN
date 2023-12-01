const express=require('express')
const router= express.Router();
const mongoose=require('mongoose');
const User=mongoose.model("User")
const jwt=require('jsonwebtoken')
const jwtsecret="123456789"
const tokenauth=require("../middleware/token")


router.post('/signup',(req,res)=>
{
    const {email,username,password}=req.body;
    if(!email || !username||!password)
    {
        return res.status(422).json({error:"Please enter all the required fields"});
    }
    else
    {
        User.findOne({email:email})
        .then((SavedUser)=>
        {
            if(SavedUser)
            {
                return res.status(422).json({error:"User already exists"});         
            }
            const user= new User
            (
                {
                    email,
                    username,
                    password
                }
            )

            user.save()
            .then(user=>{
                res.json({message:"User Details saved successfully"});
                
            })
            .catch(err =>
                {
                    console.log(err)
                }
            )
        })
        .catch(err =>
            {
                console.log(err)
            }
        )
    }
})

router.post('/login',(req,res)=>
{
    const {username,password}=req.body;
    if(!username || !password)
    {
        return res.status(422).json({error:"Please enter all the required fields"});
    }
    else
    {
        User.findOne({username:username})
        .then(SavedUser=>{
            if(!SavedUser)
            {
                return res.status(422).json({error:"Invalid Username/Password"});
            }
            if(password===SavedUser.password)
            {
                // res.json({message:"Logged in successfully"});
                const token=jwt.sign({id:SavedUser.id},jwtsecret);
                res.json({token});
            }
            else
            {
                return res.status(422).json({error:"Invalid Username/Password"});
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        });
    }

})

router.get('/protected',tokenauth,(req,res)=>
{
    res.send("Hello user");
})




module.exports=router;