import React, { useState, useEffect } from 'react';
import { EmojiHappy, Send2 } from 'iconsax-react';
import Picker from 'emoji-picker-react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import { setReduxMessage } from '@/app/redux/message/messageSlice';
import { messageHandler } from '@/data/actions/UserActions';
const MessageInput = ({ socket }) => {
  // const socket = io.connect('http://localhost:5000');

  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const username = useSelector((state) => state.user.username);

  console.log("username ",username);

  const [connectionError, setConnectionError] = useState(null);



      socket.emit('set_username', { username });


  useEffect(() => {


      socket.on("get_messages",(deneme)=>{
        console.log(deneme);
      })


    
  }, [socket]);


  const sendMessage = async (e) => {
    e.preventDefault();
 
    await socket.emit('message', { message,username });
    setMessage('');

  };

  const handleEmojiShow = () => {
    setShowEmoji(!showEmoji);
  };

  const handleEmojiClick = (emojiData, e) => {
    setMessage(prevMessage => prevMessage + emojiData.emoji);
  };

  return (
    <div className="flex justify-between items-center space-x-5 text-ellipsis">
      <div className="relative cursor-pointer">
        <EmojiHappy size="24" color="#3E0AD4" onClick={handleEmojiShow} />
        {showEmoji && <Picker className="absolute -top-80" onEmojiClick={handleEmojiClick} />}
      </div>
      <form className="flex items-center space-x-5 border border-[#ABABAB] p-4 w-full rounded-xl" onSubmit={sendMessage}>
        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Mesaj yazın..." className="outline-none w-full" />
        <button type="submit">
          <Send2 size="32" color="#3E0AD4" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
