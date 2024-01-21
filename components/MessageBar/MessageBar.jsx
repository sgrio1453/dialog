"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addChat, removeChat } from "@/app/redux/chat/chatSlice";

import { SearchNormal, ArrowRight2 } from "iconsax-react";

const  MessageBar = () => {
  // const dispatch = useDispatch();
  // const [ messages, setMessages] = useState([]);

  // const chats = useSelector((state)=> state.chat.chats)
  const messageBar = [
    {
      image: "/images/p1.jpg",
      username: "Profile 1",
      message: "Merhaba",
    },
    {
      image: "/images/p2.jpg",
      username: "Profile 2",
      message: "ajdnksa",
    },
    {
      image: "/images/p3.jpg",
      username: "Profile 3",
      message: "xzncmözxnc",
    },
    {
      image: "/images/p4.jpg",
      username: "Profile 4",
      message: "eqweuq",
    },
    {
      image: "/images/p5.jpg",
      username: "Profile 5",
      message: "şhljşg",
    },
  ];

  return (
    <div className="py-10 px-6 bg-[#F7F8FA] space-y-10">
      <form className="flex items-center bg-[#FDFDFD] p-3 space-x-3 rounded-lg border b-[#D8D8D8] w-80">
        <SearchNormal size="20" color="#ABABAB" />
        <input type="text" placeholder="Arama" className="outline-none" />
      </form>
      {/* {chats === "" ? (
        <h3>Sohbet Başlatmak için Aratın</h3>
      ): ( */}
        <div className=" space-y-5">
        {/* message */}
        {messageBar.map((i, index) => (
          <div
            key={index}
            className="flex justify-between items-center hover:bg-[#e9e9e9] hover:px-2 duration-500 cursor-pointer rounded-lg py-2"
          >
            <div className="flex flex-row items-center space-x-4 cursor-pointer duration-500">
              {/* profil image */}
              <div className="w-16 h-16 ">
                <Image
                  className="rounded-full object-cover w-full h-full border border-[#3E0AD4]"
                  src={i.image}
                  alt="profilPhoto"
                  width={60}
                  height={60}
                  unoptimized
                  lazyRoot={false}
                />
              </div>
              {/* message */}
              <div className="flex flex-col space-y-1">
                <h2 className="font-semibold">{i.username}</h2>
                <div className="flex items-center">
                  <ArrowRight2 size="18" color="#3E0AD4" />
                  <h5 className="">{i.message}</h5>
                </div>
              </div>
            </div>
            <div className="text-[#ABABAB] text-xs">14 : 53</div>
          </div>
        ))}
      </div>
      {/* )} */}
      
    </div>
  );
};

export default MessageBar;
