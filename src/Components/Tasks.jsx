import { useContext, useState } from "react"
import TaskInfo from "./TaskInfo"
import { tasksContext } from "../Contexts/TasksContext"
import {v4} from "uuid"
import Task from "./Task"

export default function Tasks(){

    var [state, dispatch] = useContext(tasksContext)

    var [taskName, setTaskName] = useState('')
    var [taskComment, setTaskComment] = useState('')
    var [taskDate, setTaskDate] = useState('')

    return(
        <>
            <main className="w-full h-[calc(100vh-100px)] bg-[#E2C799] flex justify-center items-start gap-x-[5%] pt-[5vh] gap-y-[5%]">
                
                <section className="w-[30%] h-[80vh]  flex flex-col items-center justify-start gap-y-[5%]">
                    <div className="w-full bg-[#9A3B3B] h-[45%] flex flex-col p-[20px] rounded-[15px] items-center justify-evenly">

                        <div className="w-[100%] h-[25%] flex flex-col items-start">
                            <label className="text-[#F2ECBE] font-[600]" htmlFor="taskName">
                                Name of Task
                            </label>

                            <input
                                onChange={(e) => {setTaskName(`${e.target.value}`)}}
                                id="taskName"
                                value={taskName}
                                placeholder="Write Task's name"
                                className="w-[100%] pl-[10px] h-[80%] rounded-[15px] "
                            >
                            </input>
                        </div>

                        <div className="w-[100%] h-[25%] flex flex-col items-start">
                            <label className="text-[#F2ECBE] font-[600]" htmlFor="taskName">
                                Comment of Task
                            </label>

                            <input
                                onChange={(e) => {setTaskComment(`${e.target.value}`)}}
                                value={taskComment}
                                id="taskName"
                                placeholder="Add comment..."
                                className="w-[100%] pl-[10px] h-[80%] rounded-[15px] "
                            >           
                            </input>
                        </div>

                        <div className="w-[100%] h-[25%] flex flex-col items-start">
                            <label className="text-[#F2ECBE] font-[600]" htmlFor="taskName">
                                Expire Date of Task
                            </label>

                            <input
                                onChange={(e) => {setTaskDate(`${e.target.value}`)}}
                                id="taskName"
                                value={taskDate}
                                placeholder="When it should be over?"
                                className="w-[100%] pl-[10px] h-[80%] rounded-[15px] "
                            >
                            </input>
                        </div>

                        <button 
                        onClick={(e) => {
                            var nomresi = `${v4()}`
                            
                            dispatch(
                                {
                                    method: "addTask",
                                    payload: {
                                        [nomresi]:{
                                            'taskName': taskName,
                                            'taskComment': taskComment,
                                            'taskDate': taskDate,
                                            'completed': false
                                        }
                                        
                                    }
                                }
                            )

                            e.preventDefault()
                            setTaskName('')
                            setTaskDate('')
                            setTaskComment('')
                        }}
                        className="transition ease-in-out duration-500 bg-[#E2C799] w-full h-[15%] rounded-[15px] hover:text-[22px] text-[#9A3B3B] font-black">
                            Push
                        </button>

                    </div>
                    <TaskInfo taskName={taskName} taskComment={taskComment} taskDate={taskDate}></TaskInfo>

                </section>



                <section className="w-[50%] min-h-[100px] h-auto p-[20px] bg-[#C08261] flex flex-col items-center rounded-[15px] gap-y-[25px]">
                    {Object.entries(state).map(([id, item]) => <Task 
                    
                    taskName={item.taskName}
                    taskCompleted={item.completed}
                    taskId = {id} 
                    taskComment={item.taskComment} 
                    taskDate={item.taskDate}
                    ></Task>)}
                </section>
            </main>
        </>
    )
}