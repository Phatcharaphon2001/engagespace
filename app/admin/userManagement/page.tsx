"use client"
import React, { useEffect, useState } from 'react'
import DomainTable from '@/components/tables/DomainTable'
import { data } from 'autoprefixer';

export default function UserMananementPage() {
  const [domains,setDomains] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:3000/api/domain")
    .then(response => response.json())
    .then(data => setDomains(data))
  },[]);
  return (
    <div className='w-full flex flex-col p-[10px]'>
      <DomainTable items={domains}/>
    </div>
  )
}