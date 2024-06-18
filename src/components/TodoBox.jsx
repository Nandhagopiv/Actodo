import { useState } from "react"

function TodoBox() {
    const [userList, setuserList] = useState([
        {
            id:1,
            task:"apple"
        },
        {
            id:2,
            task:"orange"
        },
        {
            id:3,
            task:"grape"
        },
        {
            id:4,
            task:"banana"
        },
    ])
    const [modify, setModify] = useState(false)
    const [inputVal, setinputVal] = useState("")
    const [tempArrf,setTempArrf] = useState([])
    const [tempArrl,setTempArrl] = useState([])
    const [modifybtn,setModifybtn] = useState(false)

    function handleDelete(id) {

        var newList = userList.filter((data) => {
            if (id === data.id) {
                return false
            } else {
                return true
            }
        })

        setuserList(newList)
    }

    function handleAdd() {
        console.log(tempArrf,tempArrl);
        if (inputVal === "") {
            alert("Enter something")
        } else {
            if (modify === true) {
                setuserList([...tempArrf,{id:tempArrf.length + 1,task:inputVal},...tempArrl])
                setModify(false)
                setinputVal("")
                setModifybtn(false)
            } else {
                setuserList([...userList, { id: userList.length + 1, task: inputVal }])
                setinputVal("")
            }
        }
    }

    function handleEdit(id) {
        setModifybtn(true)
        var clickedTodo = userList.filter((data) => {
            if (data.id === id) {
                return true
            } else {
                return false
            }
        })
        setModify(true)
        setinputVal(clickedTodo[0].task)
        setTempArrf(userList.slice(0,id-1))
        setTempArrl(userList.slice(id,userList.length))
    }

    function handleChange(e) {
        setinputVal(e.target.value)
    }

    return (
        <div className="flex flex-grow gap-5 justify-center md:justify-start flex-wrap">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Manage Activities</h1>
                <input value={inputVal} onChange={handleChange} className="p-2 border border-none rounded-md bg-slate-300 outline-none my-3" placeholder="Enter your Activity" type="text"></input>
                <button onClick={handleAdd} className="p-2 border border-none rounded-md text-white px-5 bg-black">{modifybtn?"Modify":"Add"}</button>
            </div>
            <div className="bg-[#BDB4EA] p-3 border rounded-xl flex-grow">
                <h1 className="text-2xl font-bold ">Today's Activity</h1>
                {
                    userList.length === 0 ? <p className="py-2 text-xl">You have added nothing today</p> : ""
                }
                {
                    userList.map((data, index) => {
                        return <div className="flex justify-between">
                            <p style={{ wordBreak: "break-word" }} className="py-3 w-11/12 text-xl">{index + 1}. {data.task}</p> <div className="flex justify-end"><button onClick={() => handleEdit(data.id)} className=" bg-black m-1 p-1 w-14 border h-10 border-none rounded-md text-white">Edit</button> <button onClick={() => handleDelete(data.id)} className=" bg-black m-1 p-1 w-14 border h-8 border-none rounded-md text-white">Delete</button></div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TodoBox