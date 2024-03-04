import React from "react";


export default function Navbar(){




    return(
        <nav  className=" flex justify-between px-24 h-16 items-center pt-5 bg-gray-100 p-8">
		<div className="text-4xl font-extrabold text-blue-900 ">Project.io </div>
		<div className="text-black   flex  ">
			<a href="/" className="text-xl px-4">Home</a>
			<a href="#" className="text-xl px-4">About</a>
			<a href="#" className="text-xl px-4">Blog</a>
			<a href="#" className="text-xl px-4">Contact</a>
			<button className="bg-blue-600 px-6 py-1 mr-1 text-white rounded-lg border-none  hover:bg-blue-800 outline-none font-semibold  " id="#Logbtn ">Login</button>
			<button className="bg-blue-600 px-6 py-2 ml-0 text-white rounded-lg border-none  hover:bg-blue-800 outline-none font-semibold  " id="#Logbtn ">Logout</button>
		</div>

		
	</nav>
    )
}
