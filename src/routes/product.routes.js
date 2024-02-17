const express = require('express');
const ProductRouter = express.Router();
const { productController,ProductView } =  require('../controllers/product.controller');

ProductRouter.get('/',ProductView);



ProductRouter.get('/getAll',productController);

ProductRouter.get('/get/:id',(req,res)=>{
  res.send(req.params.name);
})
ProductRouter.post('/create',(req,res)=>{
  res.send(req.params.name)
})
ProductRouter.patch('/update/:id',(req,res)=>{
  res.send(req.params.name)
})
ProductRouter.delete('/delete/:id',(req,res)=>{
  res.send(req.params.name)
})
module.exports = {ProductRouter}