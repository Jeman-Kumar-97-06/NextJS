export default async function BlogDets ({params}:{params:{id:string}}) {
    const id = params.id;
    return <h1>Blog {id} </h1>
}