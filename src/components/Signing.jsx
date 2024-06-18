import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signing(props) {
    const [eUsername, seteUsername] = useState('')
    const [ePassword, setePassword] = useState('')
    const [eCrtPassword, seteCrtPassword] = useState('')
    const [msg, setmsg] = useState("You can sign up here:)")
    const [msgCol, setmsgCol] = useState(false)
    const Navigate = useNavigate()

    function handleUsername(e) {
        seteUsername(e.target.value)
    }

    function checkOldUser() {
        let userfound = false
        props.users.forEach((data) => {
            if (data.username === eUsername) {
                userfound = true
                setmsg("User already Existed")
                setmsgCol(true)
            }
        })

        if (userfound === false) {
            setmsg("You can sign up here:)")
            setmsgCol(false)
        }
    }

    function handlePassword(e) {
        setePassword(e.target.value)
    }

    function handleCrtPassword(e) {
        seteCrtPassword(e.target.value)
    }

    function addUsers(e) {
        e.preventDefault()
        let userf = false
        props.users.forEach((data)=>{
            if (data.username === eUsername) {
                userf = true
            }
        })

        if (userf === true) {
            alert("User already existed")
        } else {
            if (ePassword !== eCrtPassword) {
                setmsg("Your Passwords are not Matching")
                setmsgCol(true)
            } else {
                props.setUsers([...props.users, { username: eUsername, password: ePassword }])
                Navigate('/')
                alert("Sucessfully Created")
            }
        }
    }

    return (
        <div>
            <div className="flex justify-center my-40">
                <div className="flex flex-col gap-5 w-3/4 md:w-4/12">
                    <h1 className="text-3xl font-bold">Hey Hello</h1>
                    <p style={{ color: msgCol ? "red" : "black" }} className="text-xl">{msg}</p>
                    <form onSubmit={addUsers} className="flex gap-5 flex-col">
                        <input required type="text" value={eUsername} onKeyUp={checkOldUser} onChange={handleUsername} className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="username"></input>
                        <input required type="password" value={ePassword} onChange={handlePassword} className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="password"></input>
                        <input required type="password" value={eCrtPassword} onChange={handleCrtPassword} className="p-2 bg-slate-200 outline-none border rounded-md border-none" placeholder="confirm password"></input>
                        <button type="submit" className="p-2 bg-yellow-800 text-white font-bold border rounded-md border-none">Signup</button>
                    </form>
                    <p>Already have an account?<Link to={"/"} className="underline"> Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signing