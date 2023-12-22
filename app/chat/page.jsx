import React from "react";
import Image from "next/image";
import Link from "next/link";

// icon import
import { Messages3, Call, Setting, LogoutCurve, SearchNormal, ArrowRight2, More, EmojiHappy, Send2  } from 'iconsax-react';
import MessageBar from "@/components/MessageBar/MessageBar";
import SearchBar from "@/components/SearchBar/SearchBar";

// image 



const Chat = () => {

 


  return (
    <div className="w-full h-full flex font-redHatDisplay">


      {/* first section */}
      <div className="flex flex-col justify-between p-9 bg-bg-white ">
       <div className="space-y-9">
         {/* logo & profil */}
         <div className="space-y-9">
          <div className="w-12 h-12">
            <Image
            className="w-full h-full rounded-full"
            src="/images/logo.png"
            alt="logo"
            height={48}
            width={48}
            />
          </div>
          <div className="w-12 h-12">
            <Image
            className="w-full h-full rounded-full object-cover"
            src="/images/me.jpg"
            alt="profil"
            height={48}
            width={48}
            />
          </div>
        </div>

        <hr />

        {/* navbar */}
        <div className="flex flex-col space-y-9">
          <Link href="/chat"><Messages3 size="40" color="#3E0AD4" variant="Bold"/></Link>
          <Link href="/#"><Call size="40" color="#ABABAB"/></Link>
          <Link href="/#"><Setting size="40" color="#ABABAB"/></Link>
        </div>
       </div>
       <Link href="/login"><LogoutCurve size="32" color="#ABABAB"/></Link>
      </div>




      {/* second section */}
      <div className="py-10 px-6 bg-[#F7F8FA] space-y-10">
        <SearchBar/>
        <MessageBar/>
      </div>


      {/* third section */}
      <div className="flex flex-col px-16 py-8 bg-bg-white w-full space-y-8">
        {/* profil  */}
        <div className="flex justify-between items-center">
          {/* profil image */}
        <div className="w-16 h-16 ">
                <Image
                  className="rounded-full object-cover w-full h-full border border-[#3E0AD4]"
                  src="/images/p1.jpg"
                  alt="profilPhoto"
                  width={60}
                  height={60}
                  unoptimized
                />
          </div>
          <div className="flex items-center space-x-2">
            <div className="font-bold">Profile 1</div>
            <div className="text-green-500 text-4xl">•</div>
          </div>
          <div className="flex space-x-4">
            <div><SearchNormal size="32" color="#292D32"/></div>
            <div><More className="rotate-90" size="32" color="#292D32"/></div>
          </div>
        </div>
        <hr className="border-[#D8D8D8]"/>
        {/* message */}
        <div className="w-full h-screen flex flex-col justify-end  overflow-y-auto">
        <div className="w-full h-[2000px] overflow-y-auto space-y-4 p-4">
        <div className="flex justify-end ">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit met consectetur adipisicing elit. Quaerat commodi vel praesentium nam pariatur inventore cumque nemo officia consequuntur exercitationem?</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:13</h4>
            </div>
            </div>
            <div className="flex justify-start">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#414142] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, totam esse maxime vel fuga repudiandae!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
            <div className="flex justify-end">  
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum pariatur magnam natus sunt odit provident tenetur. Alias architecto est, nesciunt officia dicta mollitia ratione dolorem placeat, pariatur at perspiciatis commodi necessitatibus minima distinctio, obcaecati autem doloribus! Reiciendis sequi blanditiis cupiditate suscipit deleniti!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
        <div className="flex justify-end">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat commodi vel praesentium nam pariatur inventore cumque nemo officia consequuntur exercitationem?</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
            <div className="flex justify-start">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#414142] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, totam esse maxime vel fuga repudiandae!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
            <div className="flex justify-end ">  
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum pariatur magnam natus sunt odit provident tenetur. Alias architecto est, nesciunt officia dicta mollitia ratione dolorem placeat, pariatur at perspiciatis commodi necessitatibus minima distinctio, obcaecati autem doloribus! Reiciendis sequi blanditiis cupiditate suscipit deleniti!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
        <div className="flex justify-end ">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat commodi vel praesentium nam pariatur inventore cumque nemo officia consequuntur exercitationem?</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
            <div className="flex justify-start">
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#414142] rounded-lg px-2 py-2 space-x-3 ">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, totam esse maxime vel fuga repudiandae!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
            <div className="flex justify-end">  
            <div className="flex justify-between max-w-[60%] text-ellipsis bg-[#3E0AD4] rounded-lg px-2 py-2 space-x-3">
                <h2 className="text-[#FDFDFD] p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum pariatur magnam natus sunt odit provident tenetur. Alias architecto est, nesciunt officia dicta mollitia ratione dolorem placeat, pariatur at perspiciatis commodi necessitatibus minima distinctio, obcaecati autem doloribus! Reiciendis sequi blanditiis cupiditate suscipit deleniti!</h2>
                <h4 className="text-xs text-[#FDFDFD] flex items-end">14:53</h4>
            </div>
            </div>
        </div>
        </div>
        {/* input */}
        <div className="flex justify-between items-center space-x-5  text-ellipsis">
          <form className="flex items-center space-x-5 border border-[#ABABAB] p-4 w-full rounded-xl">
            <EmojiHappy size="24" color="#3E0AD4"/>
            <input type="text" placeholder="Mesaj yazın..." className="outline-none w-full"/>
          </form>
          <div>
          <Send2 size="32" color="#3E0AD4"/>
          </div>
        </div>
      </div>


      {/* forth section */}
      <div className="flex flex-col px-28 py-16 bg-[#F7F8FA] items-center space-y-6">
        <div className="w-40 h-40 ">
                <Image
                  className="rounded-full object-cover w-full h-full border border-[#3E0AD4]"
                  src="/images/me.jpg"
                  alt="profilPhoto"
                  width={160}
                  height={160}
                  unoptimized
                />
          </div>  
        <div className="text-xl font-semibold">Samet Geçgel</div>
        <div className="text-[#777] text-xs font-medium">+90 (505) 505 05 05</div>
      </div>
    </div>
  );
};

export default Chat;
