import { useState } from "react"

function TodoBox() {
    const [userList, setuserList] = useState([])

    const [inputVal, setinputVal] = useState("")

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
        if (inputVal === "") {
            alert("Enter something")
        } else {
            setuserList([...userList, { id: userList.length + 1, task: inputVal }])
            setinputVal("")
        }
    }

    function handleChange(e) {
        setinputVal(e.target.value)
    }

    return (
        <div className="flex flex-grow gap-5 justify-center md:justify-start flex-wrap">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold">Manage Activities</h1>
                <input value={inputVal} onChange={handleChange} className="p-2 border border-none rounded-md bg-slate-300 outline-none my-3" placeholder="Enter your Activity" type="text"></input>
                <button onClick={handleAdd} className="p-2 border border-none rounded-md text-white px-5 bg-black">Add</button>
            </div>
            <div className="bg-[#BDB4EA] p-3 border rounded-xl flex-grow">
                <h1 className="text-2xl font-bold ">Today's Activity</h1>
                {
                    userList.length === 0 ? <p className="py-2 text-xl">You have added nothing today</p> : ""
                }
                {
                    userList.map((data, index) => {
                        return <div className="flex justify-between">
                            <p style={{wordBreak:"break-word"}} className="py-3 text-xl">{index + 1}. {data.task}</p> <button onClick={() => handleDelete(data.id)} className=" bg-black m-2 p-1 border h-10 border-none rounded-md text-white">Delete</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TodoBox