'use client'
import Link from 'next/link'
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface SideBarProps {
  items: any,
  name: string,
}
const SideBar: React.FC<SideBarProps> = ({
  items,
  name,
}) => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);


  return (
    <div className='w-1/5 bg-green-800 text-center rounded-r-md border-r-2 border-black'>
      <div className='text-white text-lg mt-4'>
        Good Morning
      </div>
      <div className='m-6'>
        {
          session?.user ? (
            <p>{session.user.name}</p>
          ):null
        }
      </div>
      {items.map((item: any, index: number) => (
        <Link key={index} href={item.pathname} className='mt-16'>
          <button className='text-left w-[70%] rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>{item.name}</button>
        </Link>
      ))}
      <div>
        {
          !session ? (
            <button onClick={()=>signIn()} className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>🔒 LogIn</button>
          ):(
          <button onClick={()=>signOut()} className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>🔒 LogOut</button>
          )
        }
      </div>
    </div>
  )
}

export default SideBar