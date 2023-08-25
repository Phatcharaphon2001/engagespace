"use client"

import UserTable from '@/components/tables/userTable';
import React, { useState, useEffect } from 'react'


export default function UserMananementPage() {


  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <UserTable />
    </div>
  )
}
