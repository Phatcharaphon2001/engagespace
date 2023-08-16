"use client"

import React,{ReactNode} from "react";
import { SessionProvider } from "next-auth/react";

interface providersProps{
    children:ReactNode
}

const Providers:React.FC<providersProps> = ({
    children
}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Providers