const express = require('express');
const { ProductRouter } = require('./src/routes/product.routes');

const app = express();
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
  res.render('pages/index')
})

app.use('/product',ProductRouter);

app.listen(3000,()=>{
  console.log('server started at http://localhost:3000')
})