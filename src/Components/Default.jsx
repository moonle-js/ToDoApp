import { Link, Outlet } from "react-router-dom";

export default function Default(){
    return(
        <>
            <header className="w-full h-[100px] bg-[#9A3B3B] flex items-center justify-center">
                <nav className="w-[90%] h-full flex items-center justify-center">
                    <ul className="w-full h-full flex items-center justify-center">
                        <li className="w-full h-full flex items-center justify-center">
                            <Link className="transition ease-in-out duration-500 text-[#F2ECBE] text-[22px] font-black hover:scale-[1.4]" to={'/'}>Home Page</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Outlet></Outlet>
        </>
    )
}