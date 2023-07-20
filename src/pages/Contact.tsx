import React, { useState } from 'react';
import Content from '../components/Content';
import { PulseLoader } from 'react-spinners';
import { Toast } from '../components/Toast';
import axios from "axios";

type formParamType = {
    name: string,
    email: string,
    message: string
}

type formInfoKey = keyof formParamType

const inputItems: { id: formInfoKey, label: string }[] = [
    {
        id: "name",
        label: "Name",
    },
    {
        id: "email",
        label: "Email",
    },
    {
        id: "message",
        label: "Message",
    }
]

const formClear: formParamType = {
    name: "",
    email: "",
    message: ""
}

const Contact = () => {

    const [form, setForm] = useState<formParamType>(formClear)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault()

        axios.post("https://formspree.io/f/xbjvlyvn", form)
            .then(res => {
                console.log(res)
                setIsLoading(false)
                Toast.fire({
                    icon: "success",
                    title: "Message sent successfully!"
                })
                setForm(formClear)
            }).catch(err => {
                console.log(err)
                setIsLoading(false)
                Toast.fire({
                    icon: "error",
                    title: "Message could not be sent!"
                })
            })
    }


    return (
        <Content pageName="Contact" content={
            <div className='w-full h-full flex justify-center items-center'>
                <div className='shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
            bg-white bg-opacity-50 border-opacity-70 rounded-md max-w-xl flex flex-col justify-center px-10 py-10 font-mono'>
                    <h1 className='text-2xl mt-10 text-center'>Contact With Me</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
                        {
                            Array.from(inputItems).map((item, index) => {
                                return (
                                    <div className='flex flex-col gap-2 mt-5' key={index}>
                                        <label htmlFor={item.id} className='font-medium text-lg'>{item.label}</label>
                                        {
                                            item.id === "message" ?
                                                <textarea id={item.id} onChange={handleChange} value={form[item.id]} rows={5} cols={50}
                                                    className='sm:w-[500px] border-2 border-gray-100 rounded-md p-2 
                                                focus:outline-none border-opacity-10 
                                                focus:border-blue-700 focus:border-2' required />
                                                :
                                                <input type={`${item.id === "email" ? item.id : "text"}`}
                                                    id={item.id} onChange={handleChange} value={form[item.id]}
                                                    className='sm:w-[500px] border-2 border-opacity-10 
                                                border-gray-100 rounded-md p-2 focus:outline-none 
                                                focus:border-blue-700 focus:border-2' required />
                                        }

                                    </div>
                                )
                            })
                        }
                        <button type="submit" className='bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md p-2 mt-5 w-1/2 transition ease-in-out focus:outline-none items-center'>
                            {
                                isLoading ?
                                    <PulseLoader color="white" size={5} speedMultiplier={0.5} />
                                    :
                                    "Send"
                            }
                        </button>
                    </form>
                </div>
            </div>

        } />
    )
}

export default Contact