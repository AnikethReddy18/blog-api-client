import { Link } from "react-router-dom";

function formatDateTime(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" };
    return new Date(dateString).toLocaleString(undefined, options);
  }

function getPreview(content, maxLength = 200) {
    return content.length > maxLength ? content.substring(0, maxLength) + "..." : content;
}

function Post(props) {
    return (
    <div className="post">
        <Link to={`${props.id}`}><h1>{props.title}</h1></Link>
        <span>{formatDateTime(props.date)}</span>
        <div dangerouslySetInnerHTML={{ __html: getPreview(props.content) }}></div>
    </div>);
}

export default Post;