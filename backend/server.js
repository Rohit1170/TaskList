const express = require('express');

const Task = require("./db/Task");
require("./db/config");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());
app.listen(5000,()=>{
console.log(`server is running on 8000`)
});
app.post("/add-task", async (req, res) => {
    let task = new Task(req.body);
    let result = await task.save();
    res.send(result);
});
app.get("/products",async (req,res)=>{
   let products = await Task.find();

   if(products.length>0)
   {
      res.send(products);
   }
   else{
      res.send({result:"Not Found"});
   }
})



app.delete("/product/:id",async(req,res)=>{
   let result = await Task.deleteOne({_id:req.params.id});
   //console.log(req.params.id)
   res.send(result);
})


app.get("/product/:id",async (req,res)=>{
   let result = await Task.findOne({_id:req.params.id});
   if(result)
   {
      res.send(result)
   }
   else{
      res.send({result:"no record found"})
   }
})


app.put("/product/:id",async (req,res)=>{
   let result =await Task.updateOne(
      {_id:req.params.id},
      {
         $set : req.body
      }
   )

   res.send(result);

})



app.get("/search/:key",async (req,res)=>{
   let result = await Task.find({

      '$or': [
         {title:{$regex:req.params.key}},
         {description:{$regex:req.params.key}},
         {category:{$regex:req.params.key}}
       ]
   })
   res.send(result);
})

