export default function EachProduct({params}:{params:{id:string}}){
    const prodId = params.id;
    return <h1>Product {prodId}</h1>
};