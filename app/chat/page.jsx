"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
import useCookie from '@/hooks/useCookies';
import MessageBar from '@/components/MessageBar/MessageBar';
import Navbar from '@/components/Navbar/Navbar';
import MessageSender from '@/components/MessageSender/MessageSender';
import Message from '@/components/Message/Message';
import MessageInput from '@/components/MessageInput/MessageInput';
import UserSenderInfo from '@/components/UserSenderInfo/UserSenderInfo';
import UserProfile from '@/components/UserProfile/UserProfile';
import Settings from '@/components/Settings/Settings';
import Call from '@/components/Call/Call';


const Chat = () => {
  const [selectedComponent, setSelectedComponent] = useState('MessageBar');
  const router = useRouter();
  

  const isAuth = useSelector((state) => state.user.isAuth);

  const [value, update, remove] = useCookie("token", "")

  

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'MessageBar':
        return <MessageBar />;
      case 'Call':
        return <Call/>;
      case 'Setting':
        return <Settings/>;
      case 'UserProfile':
        return <UserProfile />;
      default:
        return null;
    }
  };
  console.log(value, "value brauda");

  return (
    <>
    {value == null || value.length <= 1 ? 
    (router.push('/login')) : (
      <div className="w-full h-full flex font-redHatDisplay">
      {/* first section */}
      <Navbar setSelectedComponent={setSelectedComponent} />
      {/* second section */}
        {renderSelectedComponent()}    
      {/* third section */}
      <div className="flex flex-col px-16 py-8 bg-bg-white w-full space-y-8">
        <MessageSender />
        <hr className="border-[#D8D8D8]" />
        {/* message */}
        <Message />
        {/* input */}
        <MessageInput />
      </div>
      {/* forth section */}
      <UserSenderInfo />
    </div>
    )}
    </>
  );
};

export default Chat;
