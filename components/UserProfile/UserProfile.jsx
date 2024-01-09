import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux';

const UserProfile = () => {
const dispatch = useDispatch();

// username: '',
//         firstname: '',
//         lastname: '',
//         email: '',
//         phone: '',

const isAuth = useSelector((state) => state.user.isAuth);
const username = useSelector((state) => state.user.username);
const firstname = useSelector((state) => state.user.firstname);
const lastname = useSelector((state) => state.user.lastname);
const email = useSelector((state) => state.user.email);
const phone = useSelector((state) => state.user.phone);

console.log(isAuth, "sandjas");
  
  return (
    <div className='px-24 py-16 bg-[#F7F8FA] space-y-10'>
      <div className='w-44 h-44'>
        <Image
          className="rounded-full object-cover w-full h-full border border-[#3E0AD4]"
          src="/images/me.jpg"
          alt="profilPhoto"
          width={168}
          height={168}
          unoptimized
        />
      </div>

      <h2 className='text-center font-semibold text-xl'>{username}</h2>
      <h2 className='text-center font-semibold text-xl'>{firstname} {lastname}</h2>
      <h4 className='text-center text-[#777] text-xs font-medium'>{phone}</h4>
    </div>
  )
}

export default UserProfile
