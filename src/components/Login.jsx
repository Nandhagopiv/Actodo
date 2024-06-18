import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const [eUsername, seteUsername] = useState('')
    const [ePassword, setePassword] = useState('')
    const[msgCol,setmsgCol] = useState(false)
    const [msg, setmsg] = useState("I help you manage your daily activities:)")
    const Navigate = useNavigate()

    function handleUsername(e) {
        seteUsername(e.target.value)
    }

    function handlePassword(e) {
        setePassword(e.target.value)
    }

    function userCheck(e) {
        e.preventDefault()
        let userfound = false
        
        props.users.forEach((data) => {
            if (eUsername === data.username && ePassword === data.password) {
                Navigate("/home", { state: { user: eUsername } })
                userfound = true
            } else if (eUsername === data.username && ePassword !== data.password) {
                setmsg("Incorrect Password")
                setmsgCol(true)
                userfound = true
            }

            if (userfound === false) {
                setmsg("User not Found. Sign up and Login Again")
                setmsgCol(true)
            }
        })
    }

    return (
        <div className="flex justify-center my-40">

            <div className="flex flex-col gap-4 m-10 w-3/4 md:w-4/12">
                <h1 className="text-3xl font-bold">Hey Hello</h1>
                {
                    <p style={{color: msgCol?"red":"black"}} className="text-xl">{msg}</p>
                }
                <form onSubmit={userCheck} className="flex gap-4 flex-col">
                    <input required type="text" value={eUsername} onChange={handleUsername} className="p-2 outline-none border bg-slate-200 rounded-md border-none" placeholder="username"></input>
                    <input required type="password" value={ePassword} onChange={handlePassword} className="p-2 outline-none border bg-slate-200 rounded-md border-none" placeholder="password"></input>
                    <button type="submit" className="p-2 bg-purple-950 text-white font-bold border rounded-md border-none">Login</button>
                </form>
                <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login