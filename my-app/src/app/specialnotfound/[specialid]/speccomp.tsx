'use client';
import { usePathname } from "next/navigation";
export default function SpecComp() {
    const pN = usePathname();
    const pId = pN.split('/')[2];
    return (
        <h1>This is path {pId}</h1>
    )
}