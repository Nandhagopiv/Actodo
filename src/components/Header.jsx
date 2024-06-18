function Header(props){
    let user = props.user
    return(
        <div>
            <h1 className="text-4xl font-bold p-2">Hello {user.charAt(0).toUpperCase() + user.slice(1)}</h1>
            <p className="text-2xl p-2">I will help you manage your activities:)</p>
        </div>
    )
}

export default Header