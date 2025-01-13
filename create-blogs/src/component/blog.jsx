import axios from "axios";

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
    <div >
        <h1>{props.title}</h1>
        <span>{props.date}</span>
        <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
        {!props.isPublished && <button onClick={()=>publish(props.id)}>Publish</button>}
    </div>); ;
}

export default Blog;