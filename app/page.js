"use client"
import Image from 'next/image'
import Link from 'next/link'
import { getUserHandler } from '@/data/actions/UserActions'
import { useState } from 'react';
import { data } from 'autoprefixer';

export default function Home() {

  //MAKE USE STATE FOR USERS
  const [users, setUsers] = useState([]);

  const getUsers = async () =>{
    await getUserHandler().then((data) => {
      setUsers(data)
    })
    
  }

getUsers();

  return (
    <div className='w-full m-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
         
        {
          users ?    <>
          
            {users.map((i, index) => (
              <div key={index} className='flex flex-col space-y-4'>
                <h1 className='font-bold font-comfortaa text-black text-4xl tracking-widest'>
                  {i.username}
                </h1>
                <h1 className='font-bold font-comfortaa text-black text-4xl tracking-widest'>
                  {i.email}
                </h1>
              </div>
              
            ))}
          </>: <h1>user not found</h1>
}   
        </div>  
      </div>
    </div>
  )
}
