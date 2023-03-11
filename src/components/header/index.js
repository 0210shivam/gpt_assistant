import React from 'react'

export default function Header() {
   return (
      <>
         <div className="flex justify-between p-5 shadow">
            <div id='logo' className='p-1 font-bold'>
               GPT Assistant
            </div>

            <div id="rightbar" className='flex gap-10'>
               <div className='border border-solid rounded w-52 p-1'>
                  Search Bar
               </div>
               <div className='border border-solid rounded-full w-9'>
               </div>
            </div>
         </div>
      </>
   )
}


// *Logo
// *Search Bar
// *Avatar 