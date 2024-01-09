"use client"
import React, { useState } from 'react'
import { useAuth } from 'next-auth/react';

import { getUserHandler } from '@/data/actions/UserActions'


const Profile = () => {

  const [user, setUser] = useState();

  const getUser = async () => {
    const userID = useAuth().user.userid; 
    const userRows = await getUserHandler(userID);
    const user = userRows[0]; 
    setUser(user);
  };
  getUser();
  console.log(user);

  return (
    <div className='w-full m-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
         
        {
          user ?    <>
          
              <div key={index} className='flex flex-col space-y-4'>
                <h1 className='font-bold font-comfortaa text-black text-4xl tracking-widest'>
                  {user.username}
                </h1>
                <h1 className='font-bold font-comfortaa text-black text-4xl tracking-widest'>
                  {user.email}
                </h1>
              </div>
            
          </>: <h1>user not found</h1>
}   
        </div>  
      </div>
    </div>
  )
}
export default Profile
