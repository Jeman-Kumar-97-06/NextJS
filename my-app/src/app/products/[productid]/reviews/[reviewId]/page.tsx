export default async function ReviewDets({params} : {params:Promise <{productid:string,reviewId : string}>}) {
    const rev = await params;
    const rId = rev.reviewId;
    const pId = rev.productid;
    return (
        <>
            <h1>This is review no {rId}</h1>
            <h2>This is review for product {pId}</h2>
        </>
    )
} 