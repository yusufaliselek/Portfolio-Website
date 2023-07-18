import React from 'react'
import Content from '../components/Content'

const Home = () => {
    const homeImage = require('../assets/photos/home-1.jpg')
    return (
        <Content pageName="Home" content={
            <div className='w-full h-full flex justify-center items-center'>
                <div className='shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-white bg-opacity-50 border-opacity-70 rounded-md max-w-xl flex flex-col justify-center px-10 py-5 gap-8'>
                    <img src={homeImage} />
                    <div className='font-medium text-center text-2xl font-sans'>
                        Hi, I'm Yusuf. <br /> I'm a Software Developer.
                    </div>
                    <div className='text-center font-sans'>
                        I'm currently learning ASP.Net Core and React. I have experience with C#, Javascript, Python, and Typescript.
                    </div>
                </div>
            </div>
        } />
    )
}

export default Home