import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='w-1/5 bg-green-800 text-center rounded-r-md border-r-2 border-black'>
        <div className='text-white text-lg mt-4'>
            Good Morning 
        </div>
        <Link href='/analyticsReport' className='mt-16'>
            <button className='text-left w-52 rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Analytics Report</button>
        </Link>
        <Link href='/userManagement' className='mt-1'>
            <button className='text-left w-52 rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>User Management</button>
        </Link>
        <Link href='/campaignManagement' className='mt-1'>
            <button className='text-left w-52 rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Campaign Management</button>
        </Link>
        <Link href='/moodManagement' className='mt-1'>
            <button className='text-left w-52 rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>Mood Management</button>
        </Link>
        <Link href='/' className='mt-1'>
            <button className='text-left w-52 rounded border-2 border-black bg-white px-2 hover:bg-slate-300'>ℹ️ GuideBook</button>
        </Link>
    </div>
  )
}

export default SideBar