import React, { useState, useEffect } from 'react';
import { EmojiHappy, Send2 } from 'iconsax-react';
import Picker from 'emoji-picker-react';
import { useSelector, useDispatch } from 'react-redux';
import { setReduxMessage, receiverId, messageAll } from '@/app/redux/message/messageSlice';
import { messageHandler } from '@/data/actions/UserActions';
const MessageInput = ({ socket }) => {
  // const socket = io.connect('http://localhost:5000');

  const [message, setMessage] = useState('');
  const [messagesAll, setMessagesAll] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const username = useSelector((state) => state.user.username);
  const activeUser = useSelector((state) => state.chat.user);
  const dispatch = useDispatch();
  // console.log("username kısmı",username);
  
  

      socket.emit('set_username', { username });


  const sendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      return; // Boş mesaj gönderme
    } 
    const messageUser = {
      username : username,
      receiver : activeUser.username,
      message : message,
    }
    
    // setMessagesAll((prev) => [...prev, messageUser]);
    // dispatch(messageAll(messagesAll));
    await socket.emit('message', messageUser);
    dispatch(setReduxMessage(message)); 
    
    setMessage('');
    setShowEmoji(false);

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
    <div style={{ position: 'relative', zIndex: showEmoji ? 2 : 1 }}>
      <EmojiHappy size="24" color="#3E0AD4" onClick={handleEmojiShow} />
    </div>
    {showEmoji && (
      <div style={{ position: 'absolute', top: '-480px', zIndex: 1 }}>
        <Picker onEmojiClick={handleEmojiClick} />
      </div>
    )}
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
