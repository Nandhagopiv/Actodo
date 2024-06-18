import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signing(props) {
    const[eUsername,seteUsername] = useState()
    const[ePassword,setePassword] = useState()
    const Navigate = useNavigate()

    function handleUsername(e){
        seteUsername(e.target.value)
    }

    function handlePassword(e){
        setePassword(e.target.value)
    }

    function addUsers(){
        props.setUsers([...props.users,{username:eUsername,password:ePassword}])
        Navigate('/')
    }

    return (
        <div>
            <div className="flex justify-center my-40">
                <div className="flex flex-col gap-5 md:w-4/12">
                    <h1 className="text-3xl font-bold">Hey Hello</h1>
                    <p className="text-xl">You can sign up here:)</p>
                    <div className="flex gap-5 flex-col">
                        <input value={eUsername} onChange={handleUsername} className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="username"></input>
                        <input value={ePassword} onChange={handlePassword} className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="password"></input>
                        <input className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="confirm password"></input>
                        <button onClick={addUsers} className="p-2 bg-yellow-800 text-white font-bold border rounded-md border-none">Signup</button>
                    </div>
                    <p>Already have an account?<Link to={"/"} className="underline"> Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signing