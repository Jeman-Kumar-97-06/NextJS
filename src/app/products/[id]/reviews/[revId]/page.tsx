export default async function Review({params}:{params:{revId:string}}) {
    const {revId} = await params;
    return <h1>This is Review with {revId} id</h1>
}