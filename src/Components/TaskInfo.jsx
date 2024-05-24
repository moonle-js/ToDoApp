export default function TaskInfo({taskName, taskComment, taskDate}){
    return(
        <div className="w-full rounded-[15px] h-[45%] p-[20px] flex flex-col items-center justify-evenly bg-[#C08261]">
            <p className="w-[100%] min-h-[30%] h-auto m-[10px] text-[#F2ECBE]">
                Name: {taskName}
            </p>

            <p className="w-[100%] min-h-[30%] h-auto m-[10px] text-[#F2ECBE]">
                Comment: {taskComment}
            </p>

            <p className="w-[100%] min-h-[30%] h-auto m-[10px] text-[#F2ECBE]">
                Should be done till: {taskDate}
            </p>
        </div>
    )
}