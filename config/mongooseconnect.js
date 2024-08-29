const mongoose=require("mongoose")
mongoose.connect("https://127.0.0.1:27017/scatch").then(()=>{
    console.log("Mongoose Succesfully connected")
}).catch((err)=>{
    console.log(err)
})
module.exports=mongoose.connection