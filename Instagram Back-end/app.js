const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=5000;
app.use(express.json());

// Connecting to the database
mongoose.connect("mongodb+srv://umamahhussain:umamah@cluster0.erk21jo.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log('Connected Successfully to DB'))
.catch((err) => { console.error(err); })

require('./models/user');
require('./models/post');
app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(port,()=>
{
    console.log(`Server is running on ${port}`);
})