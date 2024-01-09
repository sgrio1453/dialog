"use client"
import React, { useState } from 'react'
import { EmojiHappy, Send2  } from 'iconsax-react';
import { useSelector, useDispatch } from 'react-redux';


const MessageInput = ({ message, setMessage}) => {
  const [ message, setMessage] = useState('');

  const dispatch = useDispatch();


  const sendMessage = async (e) => {
    e.preventDefault();
    console.log(message);
  }


  return (
    <div className="flex justify-between items-center space-x-5  text-ellipsis">
          <form className="flex items-center space-x-5 border border-[#ABABAB] p-4 w-full rounded-xl" onSubmit={sendMessage}>
            <EmojiHappy size="24" color="#3E0AD4"/>
            <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Mesaj yazın..." className="outline-none w-full"/>
          </form>
          <button onClick={sendMessage}>
            <Send2 size="32" color="#3E0AD4"/>
          </button>
        </div>
  )
}

export default MessageInput
