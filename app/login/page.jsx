"use client"
import React, {useState} from 'react'
import Image from 'next/image'

import { loginHandler }  from '@/data/actions/UserActions'

// icon import

import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';

const Login = () => {

    const [username, setUsername] = useState('')
    const [pword, setPword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, pword };
        const res = await loginHandler(user).then((data) => console.log("data", data)).catch((error) => console.log(error));
        
      }

    
    
  return (
    <div className='h-[70vh] w-[60vw] bg-white flex overflow-hidden'>
        

      {/* sing up */}
        <div className='flex flex-col justify-around items-center w-1/2 py-10'>
            <div className='w-12 h-12'>
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
            <h4 className='text-[#ABABAB] font-medium'>Giriş Yapın</h4>
            <form onClick={handleSubmit} className='w-full flex flex-col items-center space-y-10 mt-4 font-redHatDisplay'>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><PersonIcon/></span>
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                    type="text" placeholder="Kullanıcı adı giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-[#3E0AD4]'><KeyIcon/></span>
                    <input 
                        onChange={(e) => setPword(e.target.value)}
                    type="password" placeholder="Şifrenizi giriniz" className='outline-none w-full' required/>
                </div>
                <button className='bg-[#3E0AD4] border border-black rounded-lg py-3 px-16 text-white text-xl hover:bg-[#5770fc] duration-500' 
               
                >
                    Giriş Yap
                </button>
            </form>
            <a href="/register" className='py-6 font-comfortaa'><h2>Hesabınız yoksa <span className='text-[#3E0AD4] border-b-2 border-[#3E0AD4]'>kayıt olmak</span> için tıklayın</h2></a>
        </div>

        {/* image */}
        <div className='w-1/2'>
            <Image
                className='object-contain w-full h-full'
                src="/images/dialogSign/logg.png"
                alt='Sign Up'
                width={500}
                height={500}
                unoptimized
            />
            </div>

    </div>
  )
}

export default Login
