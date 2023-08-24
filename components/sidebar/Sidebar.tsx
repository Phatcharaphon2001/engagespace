"use client";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface SideBarProps {
  items: any;
  name: string;
}
const SideBar: React.FC<SideBarProps> = ({ items, name }) => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

    return (
     <>
     {showSidebar ? (

 <button
   className="flex text-4xl text-black items-center cursor-pointer fixed left-6 top-6 z-50"
   onClick={() => {
     setShowSidebar(!showSidebar);
   }}
 >
   <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     stroke-width="1.5"
     stroke="currentColor"
     className="w-6 h-6 "
   >
     <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
     />
   </svg>
 </button>
     ) : (
      <svg 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6 fixed  z-30 flex items-center cursor-pointer left-6 top-6"
      onClick={() => {
        setShowSidebar(!showSidebar);
      }}
    >
       <path
       stroke-linecap="round"
       stroke-linejoin="round"
       d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
     />
    </svg>

  

     )}

  <div className={`max-w-[270px] bg-white border-r-2 border-[#707070] text-[#707070] text-base top-0 right-0 after:fixed h-full z-40  ease-in-out duration-300 ${
    showSidebar ? "translate-x-0" : "-translate-x-full"
  }`}>
 <div className="text-[#707070] text-lg pt-24 text-left px-6">
   Good Morning!
 </div>
 <div className="text-left px-6">
   {session?.user ? <p className="">{session.user.name}</p> : null}
 </div>
 {items.map((item: any, index: number) => (
   <Link
     key={index}
     href={item.pathname}
     className="flex justify-between border-b-2 border-[#707070] mx-6 pt-6"
   >
     <button className="text-left  bg-white pb-6 hover:text-blue-500 ">
       {item.name}
     </button>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="w-6 h-6"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M8.25 4.5l7.5 7.5-7.5 7.5"
       />
     </svg>
   </Link>
 ))}
 <div>
   {!session ? (
     <button
       onClick={() => signIn()}
       className="text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300"
     >
       🔒 LogIn
     </button>
   ) : (
     <button
       onClick={() => signOut()}
       className="text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300"
     >
       🔒 LogOut
     </button>
   )}
   </div>
 </div> 
     </>
    );

};

export default SideBar;

 {/* <div>
 <div className="text-[#707070] text-lg mt-4 text-left mx-10">
   Good Morning
 </div>
 <div className="m-6 mx-10 text-left">
   {session?.user ? <p>{session.user.name}</p> : null}
 </div>
 {items.map((item: any, index: number) => (
   <Link
     key={index}
     href={item.pathname}
     className="mt-16 flex justify-between mx-12 border-b-2 border-[#707070]"
   >
     <button className="text-left   bg-white pb-3 hover:text-blue-500 ">
       {item.name}
     </button>
     <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth={1.5}
       stroke="currentColor"
       className="w-6 h-6"
     >
       <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M8.25 4.5l7.5 7.5-7.5 7.5"
       />
     </svg>
   </Link>
 ))}
 <div>
   {!session ? (
     <button
       onClick={() => signIn()}
       className="text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300"
     >
       🔒 LogIn
     </button>
   ) : (
     <button
       onClick={() => signOut()}
       className="text-left w-[70%]  rounded border-2 border-black bg-white px-2 hover:bg-slate-300"
     >
       🔒 LogOut
     </button>
   )}
   </div>
 </div> */}