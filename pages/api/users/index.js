import product from '../../../models/Product'
import mongo from '../../../helper/mongo'
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req,res)=>{
  // console.log("body", req.body)
  const body= JSON.parse(req.body)
    const {name,roll,department,email,about}=body;
   

try{
  if(!name||!department||!about||!roll||!email){
    return res.status(422).json({error:"Please fill all values"})
  }
  const newUser=await new product({
    name,roll,
    department,
    email,
    about
    
    
  }).save()
  console.log(newUser)
  }
  catch(err){
    console.log(err)
}

    // if(method=="GET"){
    //   try{const users=await product.find();
    //       res.status(200).json(users);}
    //       catch(err){res.status(500).json(err);}
    // }
    // if(method="POST"){
    //   try{
    //     const user=await product.create(req.body);
    //   }
    //   catch(err){
    //     res.status(500).json(err);
    //   }
    // }
  
  }