const path=require('path')
const express=require('express');
const router=express.Router()

router.get('/Add-Product',(req,res,next)=>{
    // res.send('<html><body><form  action="/admin/Product" method="POST"><input type="text" name="Item"><button type="submit">Add Product</button></form></body></html>')
    res.sendFile(path.join(__dirname,'../','views','AddProduct.html'))
})

router.post('/Product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router