import React from 'react'
import Image from 'next/image'

// icon import

import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';

const SignIn = () => {
  return (
    <div className='h-[70vh] w-[60vw] bg-white flex overflow-hidden'>
        


      {/* image */}
            <div className='w-1/2'>
            <Image
                className='object-cover w-full h-full'
                src="/images/dialogSign/signInP.jpg"
                alt='Sign Up'
                width={500}
                height={500}
            />
            </div>



      {/* sing up */}
        <div className='flex flex-col justify-around items-center w-1/2 py-10'>
            <h1 className='font-audiowide font-bold text-6xl text-transparent bg-gradient-to-r bg-clip-text from-d-blue to-d-purple text-center p-2'>dialog</h1>
            <form action="" className='w-full flex flex-col items-center space-y-10 mt-10 font-redHatDisplay'>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-d-blue'><PersonIcon/></span>
                    <input type="text" placeholder="Kullanıcı adı giriniz" className='outline-none w-full' required/>
                </div>
                <div className='flex items-center border-b-2 border-gray-300 space-x-2 w-2/3 hover:border-gray-600 duration-500'>
                    <span className='text-d-blue'><KeyIcon/></span>
                    <input type="password" placeholder="Şifrenizi giriniz" className='outline-none w-full' required/>
                </div>
                <button className='bg-d-blue border border-black rounded-lg py-3 px-16 text-white text-xl hover:bg-d-blue2 duration-500'>
                    Giriş Yap
                </button>
            </form>
            <a href="/signUp" className='py-6 font-comfortaa'><h2>Hesabınız yoksa <span className='text-red-500 border-b-2 border-red-300'>kayıt olmak</span> için tıklayın</h2></a>
        </div>

    </div>
  )
}

export default SignIn
