"use client"

import React from 'react'
import MoodObjectUpload from '@/components/mood/MoodObjectUpload';

export default function moodManagementPage() {

  return (
    <div className='w-[80%] h-fit flex flex-col justify-center items-center'>
      <MoodObjectUpload title={"Mood 1"}/>
      <MoodObjectUpload title={"Mood 2"}/>
      <MoodObjectUpload title={"Mood 3"}/>
      <MoodObjectUpload title={"Mood 4"}/>
      <MoodObjectUpload title={"Mood 5"}/>
    </div>
  )
}