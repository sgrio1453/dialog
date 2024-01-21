import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'




const Message = ({ socket }) => {

    const [ messages, setMessages] = useState([])

   

    useEffect(() => {
        socket.on("messages" , (data) => {
            setMessages([...messages, data]);
        })
    },[socket])

    // useEffect(() => {
    //     socket.on("messages" , (data) => {
    //         setMessages([...messages, data]);
    //     })
    // })
    

  return (
    <div className="w-full h-screen flex flex-col justify-end  overflow-y-auto">
        <div className="w-full h-[2000px] overflow-y-auto space-y-4 p-4">
            {
            messages ? messages.map((msg,i) => (
                <div className="flex justify-end ">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">{msg.message}</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:13</h4>
            </div>
            </div>
            ))
        : ( <></>)}
        
            {/* <div className="flex justify-start">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#414142] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, totam esse maxime vel fuga repudiandae!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div> */}
            
        </div>
        </div>
  )
}

export default Message
