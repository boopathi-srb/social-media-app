const res = require("express/lib/response");

const router=require("express").Router();
router.get("/", (req,res)=>{
  res.send("USER route")
})








module.exports=router