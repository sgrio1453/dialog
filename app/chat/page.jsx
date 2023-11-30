import React from "react";
import Image from "next/image";

// icon import
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import ListIcon from '@mui/icons-material/List';

// image 

const styling = {
    backgroundImage: `url('/images/')`,
    width:"100%",
    height:"100%"
}


const Chat = () => {
  return (
    <div className="flex bg-[#313131] h-[80vh] w-[90vw] overflow-hidden">
      {/* Left section */}
      <section className="w-1/4 bg-white overflow-y-auto border-r-2">
        {/* nav bar */}
        <div className="px-5 py-2 flex flex-row justify-between bg-[#E8E1DB]">
          {/* profil image */}
          <div className="w-12 h-12">
            <Image
              className="rounded-full object-cover w-full h-full"
              src="/images/me.jpg"
              alt="profilPhoto"
              width={48}
              height={48}
              unoptimized
            />
          </div>
          {/* options */}
          <div className="flex flex-col justify-center cursor-pointer space-y-1">
          <ListIcon style={{fontSize: '40px'}}/>
          </div>
        </div>
        {/* Search Bar */}
        <div className="bg-white p-3">
          <form>
            <input
              type="text"
              className="w-full p-4 rounded-lg bg-slate-100"
              placeholder="Sohbeti Ara"
            />
          </form>
        </div>
        {/* Chats */}
        <div>
          <div className="px-5 py-2 flex flex-row bg-white space-x-4 hover:bg-gray-100 cursor-pointer">
            {/* profil image */}
            <div className="w-12 h-12">
              <Image
                className="rounded-full object-cover w-full h-full"
                src="/images/p1.jpg"
                alt="profilPhoto"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            {/* message */}
            <div className="flex flex-col space-y-1">
              <h2 className="font-medium text-lg">Hintli adam</h2>
              <h5 className="text-green-500">typing...</h5>
            </div>
          </div>
          <hr />
          <div className="px-5 py-2 flex flex-row bg-white space-x-4 hover:bg-gray-100 cursor-pointer">
            {/* profil image */}
            <div className="w-12 h-12">
              <Image
                className="rounded-full object-cover w-full h-full"
                src="/images/p3.jpg"
                alt="profilPhoto"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            {/* message */}
            <div className="flex flex-col space-y-1">
              <h2 className="font-medium text-lg">Hintli adam</h2>
              <h5 className="text-[#a3a3a3]">Merhaba dostum nasılsın?</h5>
            </div>
          </div>
          <hr />
          <div className="px-5 py-2 flex flex-row bg-white space-x-4 hover:bg-gray-100 cursor-pointer">
            {/* profil image */}
            <div className="w-12 h-12">
              <Image
                className="rounded-full object-cover w-full h-full"
                src="/images/p2.jpg"
                alt="profilPhoto"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            {/* message */}
            <div className="flex flex-col space-y-1">
              <h2 className="font-medium text-lg">Hanfendi</h2>
              <h5 className="text-[#a3a3a3]">Merhaba dostum nasılsın?</h5>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* Right section */}
      <section className="w-3/4 flex flex-col justify-between">
        {/* nav bar */}
        <div className="flex justify-between bg-[#E8E1DB] px-5 py-2">
          <div className=" flex flex-row  space-x-4 hover:bg-gray-100 cursor-pointer">
            {/* profil image */}
            <div className="w-12 h-12">
              <Image
                className="rounded-full object-cover w-full h-full"
                src="/images/p1.jpg"
                alt="profilPhoto"
                width={48}
                height={48}
                unoptimized
              />
            </div>
            {/* message */}
            <div className="flex flex-col tracking-tighter">
              <h2 className="font-medium">Hintli adam</h2>
              <h5 className="text-[#a3a3a3]">typing...</h5>
            </div>
          </div>
          {/* options */}
          <div className="flex flex-col justify-center cursor-pointer space-y-1">
            <ListIcon style={{fontSize: "40px"}}/>
          </div>
        </div>

        {/* message section */}
        <div className="bg-[#e5f3e3] w-full h-full flex flex-col justify-end space-y-4 p-4">
            <div className="flex justify-start">
            <div className="max-w-[60%] text-ellipsis whitespace-nowrap bg-white rounded-full px-4 py-2">
                <h2>Merhaba dostum nasılsın?</h2>
            </div>
            </div>
            <div className="flex justify-end">
            <div className="max-w-[60%] text-ellipsis whitespace-nowrap bg-white rounded-full px-4 py-2">
                <h2>İyidir şuayip sen nasılsın?</h2>
            </div>
            </div>
        </div>
        {/* message input */}
        <div className=" bg-[#E8E1DB]">
            <form className="flex flex-row justify-between items-center  p-3 space-x-3">
                <div> <SentimentSatisfiedAltIcon style={{fontSize: '24px'}} className="cursor-pointer"/> </div>
                <input type="text" className="w-full p-2 rounded-md" />
                <div> <KeyboardVoiceIcon style={{fontSize: '24px'}} className="cursor-pointer"/> </div>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Chat;
