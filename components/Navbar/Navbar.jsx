"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/app/redux/user/userSlice';
import useCookie from '@/hooks/useCookies';
import Image from 'next/image';
import Link from 'next/link';
import { Messages3, Call, Setting, LogoutCurve } from 'iconsax-react';

const Navbar = ({ setSelectedComponent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [value, update, remove] = useCookie("token", "")
  const userToken = useSelector((state) => state.user.userToken);

  const handleLogout = () => {
    dispatch(logout(userToken));
    router.push('/login')
    remove();
  }

  return (
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
          <div className="w-12 h-12" onClick={() => setSelectedComponent('UserProfile')}>
            <Image
              className="w-full h-full rounded-full object-cover cursor-pointer"
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
          <button>
            <Messages3
              size="40"
              color="#3E0AD4"
              variant="Bold"
              onClick={() => setSelectedComponent('MessageBar')}
            />
          </button>
          <button>
            <Call size="40" color="#ABABAB" onClick={() => setSelectedComponent('Call')} />
          </button>
          <button>
            <Setting size="40" color="#ABABAB" onClick={() => setSelectedComponent('Setting')} />
          </button>
        </div>
      </div>
      <button onClick={handleLogout}>
        <LogoutCurve size="32" color="#ABABAB" />
      </button>
    </div>
  );
};

export default Navbar;
