import React from 'react'
import Image from 'next/image'

//icons
import { SearchNormal, More } from 'iconsax-react';



const MessageSender = () => {
  return (
    
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
  )
}

export default MessageSender
