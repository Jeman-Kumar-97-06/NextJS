import { notFound } from "next/navigation"

export default async function RevEach({params}:{params:{revId:string}}){
    const revId = params.revId 
    if (parseInt(revId)>1000) {
        return notFound();
    }
    return <h1>Rev {revId}</h1>
}