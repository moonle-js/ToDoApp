import { useContext } from "react"
import { useNavigate, useParams } from "react-router"
import { tasksContext } from "../Contexts/TasksContext"
import {v4} from 'uuid'

export default function taskDetailed(){

    var { id } = useParams()
    var navigateTo = useNavigate()
    var [state,dispatch] = useContext(tasksContext)

    return (
        <>
            {Object.entries(state).map(([taskId, item]) => {
                if(taskId == id){
                    return (
                        <main className="w-full h-[calc(100vh-100px)] bg-[#E2C799] flex items-center justify-center">
                            <div className="w-[40%] h-[200px] bg-[#9A3B3B] flex rounded-[15px] flex-col justify-evenly">
                                    
                                    <div className="w-[100%] h-[20%] vg-[#F2ECBE] text-[#E2C799] flex items-center justify-between pl-[10px] pr-[10px]">
                                        <button 
                                        onClick={() => {
                                            dispatch(
                                                {
                                                    method: "removeTask",
                                                    payload: `${taskId}`
                                                }
                                            )
                                            navigateTo('/')
                                        }}
                                        className="transition ease-in-out duration-150 rounded-[15px] max-w-[100px] w-[30%] h-[40px] bg-[#E2C799] text-[#9A3B3B] hover:scale-[1.1]">
                                            Remove
                                        </button>

                                        {item.completed == false ? 
                                        <p className=''>
                                            {item.taskName}
                                        </p> :
                                        <p className='line-through text-[#fff] font-black'>
                                            {item.taskName}
                                        </p>
                                        }
                                        
            
                                        <button 
                                        onClick={() => {
                                            dispatch(
                                                {
                                                    method: "completeTask",
                                                    payload: `${taskId}`
                                                }
                                            )
                                        }}
                                        className="transition ease-in-out duration-150 rounded-[15px] max-w-[100px] w-[30%] h-[40px] bg-[#E2C799] text-[#9A3B3B] hover:scale-[1.1]">
                                            Done
                                        </button>
                                    </div>


                                <div className="w-[100%] h-[60%] bg-[#F2ECBE] text-[#9A3B3B] p-[10px]">
                                    {item.taskComment}
                                </div>

                            </div>
                        </main>
                        
                    )
                }
            })}
        </>
    )
}