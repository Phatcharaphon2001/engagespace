"use client";
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

export default function AdminPage(){
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return <p>Signed in as {session.user?.name}</p>
  }else{
    redirect('/')
  }
}

