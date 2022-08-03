import Product from '../../../models/Product'


// eslint-disable-next-line import/no-anonymous-default-export
export default  async(req,res)=>{
   const{pid}=req.query
const product=   await Product.findOne({roll:pid})
    res.status(200).json(product)
}

