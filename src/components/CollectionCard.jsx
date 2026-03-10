import React from 'react'
import { MdAutoStories } from "react-icons/md";

export default function CollectionCard({title,tag,description,imgURL,count}) {
  return (
    <div className=' aspect-square group relative overflow-hidden cursor-pointer flex flex-col rounded-2xl text-white'>
        <div className={`bg-[url('${imgURL}')] absolute inset-0 bg-center bg-cover group-hover:scale-110 transition duration-500`}></div>
        <div className="absolute  inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-colors"></div>
        <div className="relative mt-auto p-8 flex flex-col gap-2">
            <span className='text- font-bold text-xs uppercase tracking-widest text-blue-500'>{tag}</span>
            <h2 className='text-2xl'>{title}</h2>
            <p className=' text-gray-300 font-sans'>{description}</p>
            <p className='flex items-center gap-2 capitalize'><MdAutoStories  className='text-blue-500'/> {count} Books</p>
        </div>
    </div>
  )
}
