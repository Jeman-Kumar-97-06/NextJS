export default function BlogDetails({params,}:{params:{id:string}}){
    const blogId = params.id;
    return <h1>Details about Blog {blogId}</h1>
}