import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ pageName }: { pageName: string }) => {

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <div className={`sm:h-16 h-40 flex bg-slate-900 border-b-4 border-blue-950 w-full px-20 items-center`} >
            <div className='flex gap-x-8'>
                {menuItems.map((item) =>
                    <Link to={item.path}>
                        <div className={`px-2 py-1 cursor-pointer font-mono
                    ${item.name === pageName ? "bg-slate-700 text-white font-normal" : "bg-slate-800 text-gray-400 hover:bg-slate-600 hover:text-gray-100"}
                    transition duration-200 ease-in-out rounded-sm`}>
                            {item.name}
                        </div>
                    </Link>
                )}
            </div>
        </div >
    )
}

export default Navbar