const { getAllProducts,update_product_name_by_id,update_product_price_by_id } = require("../models/product.models")

const productController = async (req,res)=>{
  const product  = await getAllProducts();
  if(product.length>0){
    res.send(product)
  }else {
    res.send("no product found")
  }
}
const productUpdateController = async (req,res)=>{
  const updateBody = req.body;
  const product_id= req.params.id;

  const updateProperty = req.body.property;
  const updatePropertyValue = req.body.value;
  if(updateProperty==="price"){
    update_product_price_by_id(product_id,updatePropertyValue)
  }
  if(updateProperty==="name"){
    update_product_name_by_id(product_id,updatePropertyValue)
  }

}

const ProductView = async (req,res)=>{
  const product  = await getAllProducts();
  res.render('pages/products',{data:product})
}
module.exports = {productController,ProductView}