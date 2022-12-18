const mongoose=require("mongoose")
const fileupload=require("express-fileupload")
const express=require("express")
const cors=require("cors")
const app=express()

const postroute=require("./routes/postroute")
const bodyparser=require("body-parser")
const fun=async()=>{
await mongoose.connect('mongodb+srv://dadiprasanth24:9963753437@cluster0.gglcimt.mongodb.net/test',err=>{
    if(err){
        console.log("not connected",err)
    }else{
        console.log("connected to data base")
    }

})}
fun()  
app.use(fileupload())  
app.use(cors())  
app.use(bodyparser.json())
// app.post('/upload', function(req, res) {
//     console.log(req.files.foo); // the uploaded file object
//   });
// app.get("/",(req,res)=>{
//   res.send("hiii")
// })
app.use("/post",postroute) 
app.get("/",(req,res)=>{
    res.status(200).json({
        message:"suceesssssssss"
    })
})
app.get("/post/image/:img",(req,res)=>{
  //res.send(req.params.img)
  return res.sendFile(__dirname+`/uploads/${req.params.img}`)
}) 
const port=process.env.PORT||8080
app.listen(port,console.log(`app is listen ${port}`))
