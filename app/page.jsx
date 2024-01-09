"use client"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  



  return (
    <div className='w-full h-full mx-48 mt-10'>
      <nav className='flex justify-between items-center mb-32'>
        <div className='flex space-x-5'>
          <div className='w-12 h-12'>
                <Image
                className='w-full h-full'
                src="/images/logo.png"
                alt='logo'
                height={48}
                width={48}
                />
            </div>
          <h3><span className='font-extrabold text-4xl tracking-wide'>Dialog</span><span className='font-light text-4xl  tracking-wide'>Chat</span></h3>
        </div>
        <div className='flex space-x-16'>
          <Link href="/register" className='text-[#3E0AD4] text-xl'>Kayıt ol</Link>
          <Link href="/login" className='text-black text-xl'>Giriş Yap</Link>
        </div>
      </nav>
      <h1 className='text-8xl text-[#3E0AD4] mx-36 mb-10 text-center font-extrabold '>
        Anlık bağlantı, sonsuz sohbet. Sizi bekliyoruz!
      </h1>

      <div className='flex justify-between items-center mx-8 space-x-52'>
        <div className='w-32 h-32'>
          <Image
          className='w-full h-full'
          src="/images/call-calling.png"
          alt='call'
          height={128}
          width={128}
          />
        </div>
        <div className='flex flex-col space-y-12'>
          <h3 className='text-[#ababab] text-2xl text-center'>İletişimin gücünü keşfedin, sınırları aşın! Anlık bağlantı, kalıcı etki. Hoş geldiniz, sohbetin yeni boyutuna.</h3>
          <div className='flex items-center justify-center'>
          <Link 
          href="/login"
          className='bg-[#3E0AD4] px-9 py-5 text-white rounded-lg font-redHatDisplay font-semibold'>Sohbete Başlamak İçin Tıkla</Link>
          </div>
        </div>
        <div className='w-32 h-32'>
          <Image
          className='w-full h-full'
          src="/images/message.png"
          alt='call'
          height={128}
          width={128}
          />
        </div>
      </div>
    </div>
  )
}
