import React from 'react'
import { Link } from "react-router-dom";

export default function Items() {
   return (
      <>
         <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
            <Link to='chat'>
               <div className='border border-solid h-32 font-mono font-bold text-center text-3xl'>
                  New Chat
               </div>
            </Link>
            <div className='border border-solid h-32'>2</div>
            <div className='border border-solid h-32'>3</div>
            <div className='border border-solid h-32'>4</div>
            <div className='border border-solid h-32'>5</div>
            <div className='border border-solid h-32'>6</div>
            <div className='border border-solid h-32'>1</div>
            <div className='border border-solid h-32'>2</div>
            <div className='border border-solid h-32'>3</div>
            <div className='border border-solid h-32'>4</div>
            <div className='border border-solid h-32'>5</div>
            <div className='border border-solid h-32'>6</div>
            <div className='border border-solid h-32'>1</div>
            <div className='border border-solid h-32'>2</div>
            <div className='border border-solid h-32'>3</div>
            <div className='border border-solid h-32'>4</div>
            <div className='border border-solid h-32'>5</div>
            <div className='border border-solid h-32'>6</div>
            <div className='border border-solid h-32'>1</div>
            <div className='border border-solid h-32'>2</div>
            <div className='border border-solid h-32'>3</div>
            <div className='border border-solid h-32'>4</div>
            <div className='border border-solid h-32'>5</div>
            <div className='border border-solid h-32'>6</div>
         </div>
      </>
   )
}
