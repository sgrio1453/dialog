import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full m-20'>
      <div className='flex justify-between'>
        <div className='flex flex-col'>
          <div className='w-80 h-[400px]'>
            <Image
            className='w-full h-full'
            src="/images/gta1.png"
            alt="Picture of the author"
            width={300}
            height={400}
            />
          </div>
          <div className='w-80 h-[400px]'>
            <Image
            className='w-full h-full'
            src="/images/gta2.png"
            alt="Picture of the author"
            width={300}
            height={400}
            />
          </div>

        </div>
        <div className='pt-28 space-y-8 flex flex-col items-center'>
          <h1 className='font-bold font-comfortaa text-white text-4xl tracking-widest'>
            dialog'a Hoşgeldiniz. 
          </h1>
          <h1>
            <Link
            href = "/login"
            className='font-bold font-comfortaa text-white text-4xl tracking-widest'
            >
              Başlamak için tıklayın.
            </Link>
          </h1>
        </div>
        <div className='flex flex-col space-y-4'>
          <div className='w-80 h-[400px]'>
              <Image
              className='w-full h-full'
              src="/images/gta4.png"
              alt="Picture of the author"
              width={300}
              height={400}
              />
            </div>
            <div className='w-80 h-[400px]'>
              <Image
              className='w-full h-full'
              src="/images/gta3.png"
              alt="Picture of the author"
              width={300}
              height={400}
              />
            </div>

        </div>
        
      </div>
    </div>
  )
}
