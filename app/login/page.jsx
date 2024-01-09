"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { login, setReduxUsername,
logout,
setFirstname,
setLastname,
setEmail,
setPhone,
} from '../redux/user/userSlice';

import { loginHandler }  from '@/data/actions/UserActions'
import useCookie from "@/hooks/useCookies";

// icon import

import KeyIcon from '@mui/icons-material/Key';
import PersonIcon from '@mui/icons-material/Person';
import { getCookie } from 'nextjs-cookie';

const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.isAuth);
    const userToken = useSelector((state) => state.user.userToken);


    const [username, setUsername] = useState('')
    const [pword, setPword] = useState('')

    const router = useRouter();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const user = { username, pword };
    //     const res = await loginHandler(user).then(() => router.push("/")).catch((error) => console.log(error));
        
    //   }

    const [value, update, remove] = useCookie("token", "")

      const handleSubmit = async (event) => {
        event.preventDefault();
        const user = { username, pword };
        await loginHandler(user).then((e)=>{
            if (e.success) { 
                console.log("buraya girdi", e);    
                update(e.token)
                dispatch(login({isAuth: true, userToken : value})),
                console.log(e.username, "username");
                dispatch(setReduxUsername(e.username))
                dispatch(setFirstname(e.firstname))
                dispatch(setLastname(e.lastname))
                dispatch(setPhone(e.phone))
                console.log("token",value);
                router.push("/chat");
                router.refresh();
              } else {
                alert("Login failed");
              }
        }).catch((error) => console.log(error));
     };

    
    
  return (
    <div className='h-[70vh] w-[60vw] bg-white flex justify-center items-center overflow-hidden'>
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
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center space-y-10 mt-4 font-redHatDisplay'>
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
