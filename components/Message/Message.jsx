import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'




const Message = ({ socket }) => {
  const [ messages, setMessages] = useState([])
  const username = useSelector((state) => state.user.username);
  const activeUser = useSelector((state) => state.chat.user);
    
    useEffect(() => {
      const handleReceivedMessage = (data) => {
        setMessages((prevMessages) => [...prevMessages, data]);
        console.log("socket username", data.time);
        
      };
        socket.on("messageReturn" , handleReceivedMessage)
        return () => {
          // Olay dinleyicisini temizle
          socket.off("messageReturn", handleReceivedMessage);
      };
    },[socket])
    console.log("liste" ,messages);

  return (
    <div className="w-full h-screen flex flex-col justify-end  overflow-y-auto">
        <div className="w-full h-[2000px] overflow-y-auto space-y-4 p-4">
            {
            messages ? messages.map((msg,i) => (
                <div key={i} className={`${username === msg.user ? 'flex justify-end' : 'flex justify-start'}`}>
                <div className={`max-w-[60%] text-ellipsis ${username === msg.user ? 'bg-[#3E0AD4]' : 'bg-[#414142]'}  rounded-lg px-2 py-2 space-x-3`}>
                  <h2 className="text-[#FDFDFD] p-1">{msg.message}</h2>
                  <h4 className="text-xs text-[#FDFDFD] flex justify-end items-end">{msg.time}</h4>
                </div>
              </div>
            ))
        : ( <></>)}
            
        </div>
        </div>
  )
}

export default Message
