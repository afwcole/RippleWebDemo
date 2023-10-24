'use client'

import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { post } from '../apis/ussd'
import { PostPayload, SIMMessage } from '@/types/types'

interface SmartPhoneProps {
  phone: string
  messages: Array<string>
  updateMessages: (message: SIMMessage) => void
  key: string,
  newMessage: boolean, 
  setNewMessage: (bool: boolean) => void
}

export default function SmartPhone({ phone, messages, updateMessages, newMessage, setNewMessage }: SmartPhoneProps){

    const [processing, setProcessing] = useState<boolean>(false);
    const [IOScreen, setIOScreen] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(true);
    const [canReply, setCanReply] = useState<boolean>(true);
    const [isReplying, setIsReplying] = useState<boolean>(false);
    const [SMSIsOpen, setSMSIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [MSG, setMSG] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setInputValue(event.target.value);
    };

    const toggleSMSIsOpen = () => {
        setSMSIsOpen((prev) => !prev);
        setNewMessage(false)
    };

    const switchScreen = (home:boolean, loading:boolean, io:boolean) => {
        if (home) {
            // clear all states
        }
        setInputValue('')
        setIsReplying(false)
        setProcessing(loading)
        setIOScreen(io)
        setHome(home)
    }

    const dialExtenstion = async() => {
        switchScreen(false, true, false)
        const payload: PostPayload = {
            USERID: 'RippleMO',
            MSISDN: phone,
            USERDATA: '*920*106',
            MSGTYPE: true,
            NETWORK: 'SIM',
            SESSIONID: '16979969671727999',
        }
        await post(payload).then((res)=>{
            switchScreen(false, false, true)
            setCanReply(res.data.MSGTYPE)
            setMSG(res.data.MSG)
            if (res.data.SIM_MESSAGE){
                if ( res.data.SIM_MESSAGE.TO && res.data.SIM_MESSAGE.MESSAGE){
                    updateMessages(res.data.SIM_MESSAGE)
                }
            }
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }).catch((error)=>{
            console.error('Error:', error);
            setMSG(error.message)
            switchScreen(false, false, true) // remove
            setCanReply(false)
        });
        setIsReplying(false)
    }

    const sendMessage = async() => {
        switchScreen(false, true, false)
        const payload: PostPayload = {
            USERID: 'RippleMO',
            MSISDN: phone,
            USERDATA: inputValue,
            MSGTYPE: true,
            NETWORK: 'SIM',
            SESSIONID: '16979969671727999',
        } 
        await post(payload).then((res)=>{
            switchScreen(false, false, true)
            setCanReply(res.data.MSGTYPE)
            setMSG(res.data.MSG)
            if (res.data.SIM_MESSAGE){
                if ( res.data.SIM_MESSAGE.TO && res.data.SIM_MESSAGE.MESSAGE){
                    updateMessages(res.data.SIM_MESSAGE)
                }
            }
            
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }).catch((error)=>{
            console.error('Error:', error);
            setMSG(error.message)
            switchScreen(false, false, true) // remove
            setCanReply(false)
        });
        setInputValue('')
        setIsReplying(false)
    }

    useEffect(()=>{
    }, [messages, phone])

    const numPadItems = [1,2,3,4,5,6,7,8,9,'*',0,'#']

    return (
        <div className="flex relative flex-col border-4 border-zinc-900 rounded-xl h-[70vh] w-[40vh] min-h-[700px] min-w-[400px] bg-white"> 
            {/* SMS Indicator */}
            <div className="flex flex-row w-full justify-between p-3 items-center bg-slate-950">
                <h4 className="h4 text-white">SMS Notifications</h4>
                <button aria-controls="drawer-top-sms" onClick={toggleSMSIsOpen}>
                    <span className="relative flex h-10 w-10">
                        {/* "animate-ping " */}
                        <span className={`${newMessage ? 'animate-ping': ''} absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-100`}></span>
                        <span className={`${messages.length ? 'bg-green-500': 'bg-white'} relative inline-flex rounded-full h-10 w-10 justify-center items-center hover:bg-zinc-500 active:bg-green-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${messages.length ? 'fill-white': 'fill-green-500'} w-6 h-6 rounded-full`} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </span>
                    </span>
                </button> 
            </div>

            {/* SMS Drawer Component */}
            <div id="drawer-top-sms" className={`${SMSIsOpen ? 'h-full p-4 visible':'h-0 invisible'} absolute top-0 left-0 right-0 w-full transition-all duration-200 ease-in-out bg-[#f1f2f6] rounded-lg`} tabIndex={-1} aria-labelledby="drawer-top-label">
                <h5 id="drawer-top-label" className="inline-flex items-center mb-4 text-base font-semibold text-zinc-800 dark:text-zinc-900">
                    <svg className="w-4 h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    SMS Notifications
                </h5>

                {messages.length ? 
                    <div className='h-5/6 overflow-y-auto mb-5'>
                        {messages.map((item, index)=>(
                            <div key={index} className="flex flex-row items-end justify-start m-4">
                                <div className='relative w-4 h-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4'>
                                    <svg className="absolute w-6 h-6 text-gray-700 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                </div>
                                <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                                    <p className="text-gray-700 dark:text-gray-400">{item}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                :
                    <div className='h-5/6 mb-5'>
                        <p>you have no messages...</p>
                    </div>
                }

                <div className='bottom-0 flex items-center justify-center'>
                    <button className="bg-gray-400 hover:bg-zinc-900 rounded-lg w-12 h-4" onClick={toggleSMSIsOpen}>                        
                    </button>
                </div>
            </div> 

            {/* Processing Screen */}
            {processing && 
                <div className="flex flex-col justify-center items-center bg-zinc-300 w-full h-full">
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span className="font-semibold pt-5">processing...</span>  
                </div>
            }

            {/* Home Screen */}
            {home && 
                <div className="flex flex-col justify-center items-center w-full h-full px-20">
                    {/* Extension View */}
                    <div className="flex justify-center items-center w-full h-20 mb-4 rounded-lg">
                        <p className="font-medium text-5xl">*920*106#</p>
                    </div>

                    {/* Number Pad View */}
                    <div className="grid grid-cols-3 gap-3 w-full">
                        {
                            numPadItems.map((item, index)=>(
                                <button key={index} className="flex justify-center items-center p-5 rounded-full bg-zinc-200 w-full h-full shadow-lg shadow-zinc-200">
                                    <p className="font-bold text-2xl">{item}</p>
                                </button>
                            ))
                        }
                    </div>

                    {/* Phone Button View */}
                    <button className="flex justify-center items-center p-4 bg-green-500 rounded-full shadow-2xl shadow-lime-400 mt-8" onClick={dialExtenstion}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 stroke-2 fill-white" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            }

            {/* IOScreen Screen */}
            {IOScreen &&
                <div className="flex flex-col justify-center items-center bg-zinc-300 w-full h-full rounded-md">
                    <div className="w-full h-5/6 flex justify-center items-center overflow-x-auto">
                        <pre className="text-zinc-950 font-bold text-center whitespace-normal whitespace-pre-line">{MSG}</pre>                        
                    </div>
                    {isReplying ? 
                        <div className="w-full h-2/6 flex flex-col bg-zinc-900 justify-center items-center p-5 rounded-t-lg transition-all duration-200 ease-in-out ">
                            <input className="rounded-md w-full p-2 border text-md font-semibold" value={inputValue} type="text" onChange={handleInputChange} placeholder="Enter Choice"/>
                            <div className='flex flex-row p-5'>
                                <button className="flex justify-center items-center bg-red-500 rounded-full shadow-lg shadow-red-900 mr-5" onClick={()=>switchScreen(true, false, false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white m-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="flex justify-center items-center bg-green-500 rounded-full shadow-lg shadow-green-900 " onClick={()=>sendMessage()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 stroke-2 fill-white m-2" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div> 
                        </div>
                    :
                        <div className={`w-full h-1/6 items-center p-2 ${canReply ? 'grid grid-cols-2 gap-2':'grid grid-cols-1'}  `}>
                            <button className="flex justify-center items-center h-full bg-zinc-200 rounded-md" onClick={()=>{switchScreen(true, false, false)}}>
                            <p className="text-2xl font-semibold text-slate-900">Dismiss</p>
                            </button>
                            {canReply && 
                                <button className="flex justify-center items-center h-full bg-zinc-900 rounded-md" onClick={()=>setIsReplying(true)}>
                                    <p className="text-2xl font-semibold text-slate-200">Reply</p>
                                </button>
                            }
                        </div>
                    }
                </div>
            }
        </div>
    )
}