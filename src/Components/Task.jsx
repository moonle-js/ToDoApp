import { useNavigate } from "react-router"

export default function Task({taskName, taskComment, taskDate, taskId, taskCompleted}){

    var navigateTo = useNavigate()

    return(
        <>
            <div onClick={() =>{
                    navigateTo(`taskDetailed/${taskId}`)
                }}  className="w-[60%] h-[200px] bg-[#9A3B3B] flex rounded-[15px] flex-col justify-evenly">
                <div className="w-[100%] h-[20%] vg-[#F2ECBE] text-[#E2C799] flex items-center justify-between pl-[10px] pr-[10px]">
                    <button  className="transition ease-in-out duration-150 rounded-[15px] max-w-[100px] w-[30%] h-[40px] bg-[#E2C799] text-[#9A3B3B] hover:scale-[1.1]">
                        Remove
                    </button>
                    
                    {taskCompleted == false ? 
                    <p className=''>
                        {taskName}
                    </p> :
                    <p className='line-through text-[#fff] font-black'>
                        {taskName}
                    </p>
                    }

                    <button className="transition ease-in-out duration-150 rounded-[15px] max-w-[100px] w-[30%] h-[40px] bg-[#E2C799] text-[#9A3B3B] hover:scale-[1.1]">
                        Done
                    </button>
                </div>
                <div className="w-[100%] h-[60%] bg-[#E2C799] text-[#9A3B3B] p-[10px]">
                    {taskComment}
                </div>
            </div>
        </>
    )
}