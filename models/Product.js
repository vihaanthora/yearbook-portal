import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},roll:{
    type:String,
    required:true
},department:{
    type:String,
    required:true
},
email:{
type:String,
required:true
},
about:{
    type:String,
    required:true
}

});
export default mongoose.models.product|| mongoose.model('product',productSchema)