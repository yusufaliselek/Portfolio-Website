import React from 'react'
import Navbar from './Navbar'
import '../App.css';


const Content = ({ pageName, content }: { pageName: string, content: React.ReactNode }) => {

    return (
        <div className='h-[100vh]'>
            <Navbar pageName={pageName} />
            <div>
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className='px-20 sm:h-[calc(100vh-64px)] h-[calc(100vh-160px)'>
                {content}
            </div>
        </div>
    )
}

export default Content