'use client'
import Link from 'next/link'
import React from 'react'
const SideBar = () => {
  
  return (
    <div className='w-1/5 bg-green-800 text-center rounded-r-md border-r-2 border-black'>
        <div className='text-white text-lg mt-4'>
            Good Morning 
        </div>
        <div>
        </div>
        <Link href='/admin/analyticsReport' className='mt-16'>
            <button className='text-left w-[70%] rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Analytics Report</button>
        </Link>
        <Link href='/admin/userManagement' className='mt-1'>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>User Management</button>
        </Link>
        <Link href='/admin/campaignManagement' className='mt-1'>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Campaign Management</button>
        </Link>
        <Link href='/admin/moodManagement' className='mt-1'>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Mood Management</button>
        </Link>
        <Link href='/admin' className='mt-1'>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>ℹ️ GuideBook</button>
        </Link>
        <div>
            <button className='text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>🔒 LogIn</button>
        </div>
    </div>
  )
}

export default SideBar