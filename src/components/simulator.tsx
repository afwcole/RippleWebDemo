'use client';

import SmartPhone from "./smart-phone"
import { useEffect, useState } from 'react'
import { getRandomPhoneNumber  } from "@/app/utils"
import { SIMMessage } from '@/types/types'

export default function Simulator() {

    const [phoneANumber, setPhoneANumber] = useState<string>('233544095844');
    const [phoneBNumber, setPhoneBNumber] = useState<string>('165100003444');
    const [phoneASMSList, setPhoneASMSList] = useState<Array<string>>([]);
    const [phoneBSMSList, setPhoneBSMSList] = useState<Array<string>>([]);

    useEffect(()=>{
        setPhoneANumber(getRandomPhoneNumber());
        setPhoneBNumber(getRandomPhoneNumber());
    }, [])

    const updateMessages = (message: SIMMessage) => {
        if (message.TO===phoneANumber){
            setPhoneASMSList([...phoneASMSList, message.MESSAGE])
        }
        if (message.TO===phoneBNumber){
            setPhoneBSMSList([...phoneBSMSList, message.MESSAGE])
        }
    }

    const clearMessages = (phone: string) => {
        if (phone=='A'){
            setPhoneANumber(getRandomPhoneNumber())
            setPhoneASMSList([])
        }
        if (phone=='B'){
            setPhoneBNumber(getRandomPhoneNumber())
            setPhoneBSMSList([])
        }        
    }

    return (
        <section className="bg-gray-100 py-20">   
            {/* Section Header */}
            <div className="flex flex-row w-full justify-center items-center pb-12 px-6">
                <h2 className="h2 pr-5">Ripple Mobile USSD Simulator</h2>
                <button className="bg-slate-900 justify-center items-center font-bold rounded-full w-10 h-10" data-modal-target="learn-more-modal" data-modal-toggle="learn-more-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="animate-bounce w-10 h-10 rounded-full bg-slate-900 fill-gray-100" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Learn More Modal */}
            <div id="learn-more-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                About Ripple Mobile USSD Simulator
                            </h3>
                            <button type="button" className="text-gray-400 hover:bg-red-800 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="learn-more-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swap/Direction Section */}
            <div className="flex flex-row w-full justify-center items-center hidden lg:flex">                
                <button className="justify-center items-center font-bold w-20 h-10 z-10" data-popover-target="swap-direction-popover" data-popover-placement="bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-slate-900 fill-gray-100 rounded-lg" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M15.97 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.22-3.22H7.5a.75.75 0 010-1.5h11.69l-3.22-3.22a.75.75 0 010-1.06zm-7.94 9a.75.75 0 010 1.06l-3.22 3.22H16.5a.75.75 0 010 1.5H4.81l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 011.06 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Swap/Direction PopOver */}
            <div data-popover id="swap-direction-popover" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
                <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
                </div>
                <div className="px-3 py-2">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div data-popper-arrow></div>
            </div>
            
            {/* px-10 grid grid-cols-2 gap-5 */}
            <div className="px-10 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 overflow-x-auto">
                {/* Phone 1 Section */}
                <div className="flex flex-col col-span-1 bg-zinc-300 p-10 rounded-lg w-full min-w-[500px]">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div>
                            <h3 className="h3">Phone A Simulator</h3>
                            <h4 className="h4">
                                <span>Session Phone Number: </span>  
                                <span className="text-zinc-600">+{phoneANumber}</span>    
                            </h4> 
                        </div>
                        <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-400 rounded-md hover:bg-zinc-700 active:bg-zinc-400" onClick={()=>{clearMessages('A')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-2" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 bg-zinc-700"/>
                    <div className="flex flex-row w-full justify-center items-center">
                        <SmartPhone phone={phoneANumber} messages={phoneASMSList} updateMessages={updateMessages} key='A'/>
                    </div>      
                </div>

                {/* Phone 2 Section */}
                <div className="flex flex-col col-span-1 bg-zinc-300 p-10 w-full rounded-lg min-w-[500px]">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div>
                            <h3 className="h3">Phone B Simulator</h3>
                            <h4 className="h4">
                                <span>Session Phone Number: </span>  
                                <span className="text-zinc-600">+{phoneBNumber}</span>    
                            </h4> 
                        </div>
                        <button type="button" className="flex justify-center items-center w-10 h-10 bg-zinc-400 rounded-md hover:bg-zinc-700 active:bg-zinc-400" onClick={()=>{clearMessages('B')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 stroke-2" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 bg-zinc-700"/>
                    <div className="flex flex-row w-full justify-center items-center">
                        <SmartPhone phone={phoneBNumber} messages={phoneBSMSList} updateMessages={updateMessages} key='B'/>
                    </div>      
                </div>
            </div>
        </section>
    )
}