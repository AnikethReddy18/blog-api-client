function Post(props) {
    return (
    <div className="post">
        <a href={`/${props.id}`}><h1>{props.title}</h1></a>
        <span>{props.date}</span>
        <p>{props.content}</p>
    </div>);
}

export default Post;