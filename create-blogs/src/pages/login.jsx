function Login() {
    return (
        <form action="/login">
            <input name="username" type="text"/>
            <input name="password" type="password"/>
            <button>Log in</button>
        </form>);
}

export default Login;