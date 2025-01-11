import { Link } from "react-router-dom";

function Post(props) {
    return (
    <div className="post">
        <Link to={`${props.id}`}><h1>{props.title}</h1></Link>
        <span>{props.date}</span>
        <p>{props.content}</p>
    </div>);
}

export default Post;