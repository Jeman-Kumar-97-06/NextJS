export default async function BlogDet({params} : {params : Promise<{blogid:string}>}) {
    const b = await params;
    const bId = b.blogid;
    return (
        <>
            <h1>Blog no {bId}</h1>
        </>
    );
}