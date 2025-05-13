import { Metadata } from "next";

type Props = {
    params : Promise <{productid:string}>
};
//Generate custom metadata object.
export const generateMetadata = async ({params}:Props) : Promise<Metadata> => {
    const id = await params;
    //The 'title' is set to 'id' after 1 sec.
    const title = await new Promise((resolve)=>{
        setTimeout(()=>{resolve(`${id}`)},1000);
    })
    return {
        title : `Product ${title}`
    }
};


export default async function ProductDets({params}:Props) {
    const p   = await params;
    const pId = p.productid;
    return <h1>Details about product {pId}</h1>
}