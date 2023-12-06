import React, { useState } from 'react'

export default function Phone({ selectedTemplate  }) {
  const [userData, setUserData] = useState(null);

  const displayUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
         <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] m-20">
          <div className="h-[32px] w-[3px] bg-red-800 dark:bg-red-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-red-800 dark:bg-red-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-red-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-red-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
          <div className="rounded-[2rem] overflow-hidden w-[200px] h-[500px] bg-white dark:bg-gray-800"></div>
        
        </div>
     
        </div>


  )
}
