"use client"
import React from 'react'
import Image from 'next/image'

import { registerHandler }  from '@/data/actions/UserActions'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";


// icon import

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [pword, setPword] = useState('')

  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, username, phone, email, pword };
    const res = await registerHandler(user).then(() => router.push("/")).catch((error) => console.log(error));
    
  };
  
    


  return (
    <div className='h-[70vh] w-[60vw] bg-white flex overflow-hidden justify-between'>
        




      {/* sing up */}
        <div className='flex flex-col items-center w-1/2 py-10'>
        <div className='w-12 h-12 mb-4'>
                <Image
                className='w-full h-full'
                src="/images/logo.png"
                alt='logo'
                height={48}
                width={48}
                />
            </div>
            <h1>
                <span className='font-extrabold text-4xl tracking-wide'>Dialog</span><span className='font-light text-4xl  tracking-wide'>Chat</span>
            </h1>
            <h4 className='text-[#ABABAB] font-medium mt-4'>Kayıt Olun</h4>

            <form action="" onSubmit={handleSubmit} className='w-full flex flex-col items-center space-y-6 mt-10 font-redHatDisplay'>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4] '><AccountCircleIcon/></span>
                    <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Adınızı giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><AccountCircleIcon/></span>
                    <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Soyadınızı giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><PersonIcon/></span>
                    <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Kullanıcı adı giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><LocalPhoneIcon/></span>
                    <input type="tel" onChange={(e) => setPhone(e.target.value)} placeholder="Telefon numaranızı giriniz" className='outline-none w-full' required maxLength={10}/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><AlternateEmailIcon/></span>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="e-posta giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><KeyIcon/></span>
                    <input type="password" onChange={(e) => setPword(e.target.value)} placeholder="Şifrenizi giriniz" className='outline-none w-full' required/>
                </div>
                {/* <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-d-blue'><KeyIcon/></span>
                    <input type="password" placeholder="Şifrenizi tekrar giriniz" className='outline-none w-full' required/>
                </div> */}
                <button className='bg-[#3E0AD4] border border-black rounded-lg py-3 px-16 text-white text-xl hover:bg-[#5770fc] duration-500'>
                    Kayıt ol
                </button>
            </form>
            <a href="/login" className='py-6 font-comfortaa'><h2>Hesabınız varsa <span className='text-[#3E0AD4] border-b-2 border-[#3E0AD4]'>giriş yapmak</span> için tıklayın</h2></a>
        </div>

        

      {/* image */}
      <div className='w-1/2'>
            <Image
                className='object-contain w-full h-full'
                src="/images/dialogSign/logg.png"
                alt='Sign Up'
                width={500}
                height={500}
            />
            </div>

    </div>
  )
}

export default Register
