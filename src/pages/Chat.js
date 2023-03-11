import React from 'react'
import Header from '../components/header'

export default function Chat() {
   return (
      <>
         <Header />
         <div id='maindiv' className='flex'>

            <div id='leftdiv' className='w-72 border-r border-solid h-full'>
               <div className='border border-solid h-32'>
                  Keywords
               </div>
               <div className='border border-solid h-96 overflow-auto grid grid-cols-3 gap-4 p-2'>
                  <div className='border border-solid h-10'>1</div>
                  <div className='border border-solid h-10'>2</div>
                  <div className='border border-solid h-10'>3</div>
                  <div className='border border-solid h-10'>4</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>1</div>
                  <div className='border border-solid h-10'>2</div>
                  <div className='border border-solid h-10'>3</div>
                  <div className='border border-solid h-10'>4</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>1</div>
                  <div className='border border-solid h-10'>2</div>
                  <div className='border border-solid h-10'>3</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
                  <div className='border border-solid h-10'>5</div>
                  <div className='border border-solid h-10'>6</div>
               </div>
            </div>

            <div id='rightdiv'>

               <div id='TopBar' className='relative top-0 flex'>
                  <div className='p-6 w-16 border border-solid'>
                     1
                  </div>
                  <div className='p-6 border border-solid w-[1010px]'>
                     Chat Title
                  </div>
               </div>

               <div id='BottomBar' className='absolute bottom-0 border flex gap-6 p-4'>

                  <div id="EnhancedChat" className='p-2 border border-solid'>
                     Enhanced
                  </div>

                  <div id='InputChat' className='p-2 w-[840px] border border-solid'>
                     Input UI
                  </div>

                  <div id='SubmitChat' className='p-2 border border-solid'>
                     Submit
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}


// ?
// TODO : Design the overflow

// TODO : resize input ui , can use flex-1 flex-3 etc.. or strech properties or gird properties...