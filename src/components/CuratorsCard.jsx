import React from 'react'

export default function CuratorsCard({name,jobTitle,info,image}) {
  return (
    <div className='p-8 flex flex-col gap-4 items-center text-center bg-neutral-800 rounded-2xl flex-1'>
        <img src={image} alt=""  className='w-25 h-25 rounded-full object-cover'/>
          <p className='text-2xl'>{name }</p>
          <p className='text-blue-500 font-sans capitalize'>{jobTitle}</p>
          <p className='text-sm font-sans text-white/60'>{info}</p>
    </div>
  )
}
