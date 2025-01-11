function Comment(props) {
    return ( 
    <div className="comment">
        <h5>{props.author.username}</h5>
        <p>{props.content}</p>
    </div> );
}

export default Comment;