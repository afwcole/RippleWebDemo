"use client"

import Accordion from "./utils/accordion"
import { useState, useRef, useEffect } from 'react'

export default function SmartPhone(props: any){

    const [processing, setProcessing] = useState<boolean>(false);
    const [IOScreen, setIOScreen] = useState<boolean>(false);
    const [home, setHome] = useState<boolean>(true);

    const [canReply, setCanReply] = useState<boolean>(true);
    const [isReplying, setIsReplying] = useState<boolean>(false);

    const numPadItems = [1,2,3,4,5,6,7,8,9,'*',0,'#']
    const textWithNewline = 'This is a line of text.\nThis is a new line of text.';

    
    return (
        <div className="flex flex-col border-4 border-zinc-900 rounded-xl sp-container"> 
            {/* SMS Indicator */}
            <div className="flex flex-row w-full justify-between p-3 items-center bg-slate-950">
                <h4 className="h4 text-white">SMS Notifications</h4>
                <button>
                    <span className="relative flex h-10 w-10">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-10 w-10 bg-white justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rounded-full fill-green-500" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </span>
                    </span>
                </button> 
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
                    <button className="flex justify-center items-center p-4 bg-green-500 rounded-full shadow-2xl shadow-lime-400 mt-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 stroke-2 fill-white" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            }

            {/* IOScreen Screen */}
            {IOScreen &&
                <div className="flex flex-col justify-center items-center bg-zinc-300 w-full h-full rounded-md">
                    <div className="w-full h-5/6 flex justify-center items-center">
                        <pre className="text-zinc-950 font-bold text-center">{textWithNewline}</pre>
                    </div>
                    {isReplying ? 
                        <div className="w-full h-2/6 flex flex-col bg-zinc-400 justify-center items-center p-5 rounded-lg">
                            <input className="rounded-lg w-full py-3 px-4 h4 border border-green-200" id="ussd-input" />
                            <button className="flex justify-center items-center p-4 bg-green-500 rounded-full shadow-2xl shadow-lime-400 mt-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 stroke-2 fill-white" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>

                    :
                        <div className={`w-full h-1/6 items-center p-2 ${canReply ? 'grid grid-cols-2 gap-2':'grid grid-cols-1'}  `}>
                            <button className="flex justify-center items-center h-full bg-zinc-200 rounded-md">
                            <p className="text-2xl font-semibold text-slate-900">Dismiss</p>
                            </button>
                            {canReply && 
                                <button className="flex justify-center items-center h-full bg-zinc-900 rounded-md">
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