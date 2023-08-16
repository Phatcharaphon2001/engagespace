'use client'
import Link from 'next/link'
import React from 'react'

interface SideBarProps {
    items: any,
    name: string,
}
const SideBar: React.FC <SideBarProps> = ({
    items,
    name,
}) => {
  return (
    <div className='w-1/5 bg-green-800 text-center rounded-r-md border-r-2 border-black'>
        <div className='text-white text-lg mt-4'>
            Good Morning 
        </div>
        <div className='m-6'>
            <p>{name}</p>
        </div>
        {items.map((item: any, index: number) => (
               <Link key={index} href={item.pathname} className='mt-16'>
               <button className='text-left w-[70%] rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>{item.name}</button>
           </Link>
        ))}     
        <div>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>🔒 LogIn</button>
        </div>
    </div>
  )
}

export default SideBar