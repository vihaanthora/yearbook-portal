// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongo from '../../helper/mongo'
import Product from '../../models/Product'
mongo()
// eslint-disable-next-line import/no-anonymous-default-export
export default(req,res)=>{
  Product.find().then(products=>{
    res.status(200).json(products)
  })
 
}