const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://rohit1170be20:Rohit1170@cluster0.hpy5tbx.mongodb.net/Task?retryWrites=true&w=majority&appName=Cluster0",{useNewURLParser: true})
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(`this is err${err}`);
})