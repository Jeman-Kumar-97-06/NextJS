import { notFound } from "next/navigation";
import SpecComp from "./speccomp";

export default async function Special404({params} : {params:Promise<{specialid:string}>}) {
    const spec = await params;
    const sId  = spec.specialid;
    if (parseInt(sId)>1000){
        notFound();
    }
    return (
        <div>
            <h1>this is special id {sId}</h1>
            <SpecComp/>
        </div>
    )
}