import React from 'react'
import Image from 'next/image'

const UserSenderInfo = () => {
  return (
    <div className="flex flex-col px-28 py-16 bg-[#F7F8FA] items-center space-y-6">
        <div className="w-40 h-40 ">
                <Image
                  className="rounded-full object-cover w-full h-full border border-[#3E0AD4]"
                  src="/images/p1.jpg"
                  alt="profilPhoto"
                  width={160}
                  height={160}
                  unoptimized
                />
          </div>  
        <div className="text-xl font-semibold">Profile 1</div>
        <div className="text-[#777] text-xs font-medium">+90 (505) 505 05 05</div>
      </div>
  )
}

export default UserSenderInfo
