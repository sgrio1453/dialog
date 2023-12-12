import React from 'react'

// icon import

import CloseIcon from '@mui/icons-material/Close';

const UserInfo = () => {
  return (
    <div className='flex flex-col'>
      {/* navbar */}
      <div>
        <div>
            <CloseIcon/>
        </div>
        <h3>
            Kişi Bilgisi
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
        <h2>
            Hintli adam
        </h2>
        <h5>
            05012345678
        </h5>
    </div>


    </div>
  )
}

export default UserInfo
