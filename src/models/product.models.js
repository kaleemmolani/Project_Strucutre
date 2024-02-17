
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProducts = async()=>{
  const allProducts  = await prisma.product.findMany({})
  return allProducts
}

const getproductbyname = async(product_name)=>{
  const product = await prisma.product.findFirst({
    where:{
      name:product_name
    }
  })
  return product;
}
const update_product_price_by_id = async(product_id,price)=>{
  const updatedProduct = await prisma.product.update({
    where:{
      id:product_id
    },
    data:{
price:price
    }
  })
}

const update_product_name_by_id = async(product_id,product_name)=>{
  const updatedProduct = await prisma.product.update({
    where:{
      id:product_id
    },
    data:{
name:product_name
    }
  })
}
module.exports = { getAllProducts, update_product_name_by_id, update_product_price_by_id}