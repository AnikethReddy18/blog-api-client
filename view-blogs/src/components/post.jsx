function Post(props) {
    return (
    <div className="post">
        <h1>{props.title}</h1>
        <span>{props.date}</span>
        <p>{props.content}</p>
    </div>);
}

export default Post;