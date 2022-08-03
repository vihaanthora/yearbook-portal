const Product=({product})=>{
    return(<div><h1>{product?.name}</h1>
    <h1>{product?.about}</h1>
    <h1>{product?.department}</h1>
    <h1>{product?.department}</h1>
        <h1>{product?.email}</h1>
        <h1>{product?.roll}</h1></div>)
}
export async function getServerSideProps({params:{id}}){
    const res=await fetch(`http://localhost:3000/api/fetch/${id}`)

const data=await res.json()
return{
    props:
    {product:data}

}}
export default Product