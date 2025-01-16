import axios from "axios";

function formatDateTime(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleString(undefined, options);
}

function Blog(props) {
    async function publish(blogId){
        const response = await axios.put("http://localhost:3000/posts/"+blogId, {} ,{
        headers:{
            Authorization: "Bearer " + localStorage.getItem('token')
        }
        })

        window.location.reload();
    }

    return ( 
    <div className="blog">
        <h1>{props.title}</h1>
        <span>{formatDateTime(props.date)}</span>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        {!props.isPublished && <button onClick={()=>publish(props.id)}>Publish</button>}
    </div>); ;
}

export default Blog;