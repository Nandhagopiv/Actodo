import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

    const[eUsername,seteUsername] = useState()
    const[ePassword,setePassword] = useState()
    const[verifyUser,setverifyUser] = useState(true)
    const Navigate = useNavigate()

    function handleUsername(e){
        seteUsername(e.target.value)
    }

    function handlePassword(e){
        setePassword(e.target.value)
    }

    function userCheck(){
        let userfound = false
        props.users.forEach((data)=>{
            if (eUsername === data.username && ePassword === data.password) {
                setverifyUser(true)
                userfound = true
                Navigate("/home",{state:{user:eUsername}})
            }

            if (userfound === false) {
                setverifyUser(false)
            }
        })
    }

    return (
    <div className="flex justify-center my-40">
        
        <div className="flex flex-col gap-4 md:w-4/12">
            <h1 className="text-3xl font-bold">Hey Hello</h1>
            {
                verifyUser? <p className="text-xl">I help you manage your daily activities:)</p> : <p className="text-xl text-red-600">You are a New User. Please Signup before you Login</p>
            }
            <div className="flex gap-4 flex-col">
                <input value={eUsername} onChange={handleUsername} className="p-2 outline-none border bg-slate-200 rounded-md border-none" placeholder="username"></input>
                <input value={ePassword} onChange={handlePassword} className="p-2 outline-none border bg-slate-200 rounded-md border-none" placeholder="password"></input>
                <button onClick={userCheck} className="p-2 bg-purple-950 text-white font-bold border rounded-md border-none">Login</button>
            </div>
            <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>
        </div>
    </div>
    )
}

export default Login