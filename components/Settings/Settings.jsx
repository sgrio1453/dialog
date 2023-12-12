import React from 'react'

const Settings = () => {
  return (
    <div className='flex flex-col'>
      {/* navbar */}
      <div>
        <div>
            <CloseIcon/>
        </div>
        <h3>
            Profil
        </h3>
      </div>

    <div>
        {/* user info */}
        
        {/* Profil Image */}
        <div className="w-12 h-12">
                    <Image
                    className="rounded-full object-cover w-full h-full"
                    src="/images/p1.jpg"
                    alt="profilPhoto"
                    width={48}
                    height={48}
                    unoptimized
                />
        </div>
        <h6 className='font-medium text-d-green2'>
            Adınız
        </h6>
        <h2>
            Samet Geçgel
        </h2>
    </div>


    </div>
  )
}

export default Settings
