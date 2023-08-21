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
  const [open, setOpen] = useState(true);

  if (open) {
    return (
      <div className="w-270 bg-white border-r-2 border-[#707070] text-[#707070] text-base transition ease-in-out delay-150 duration-1000">
        <button
          className="mx-10 mt-4"
          onClick={() => {
            setOpen(!open);
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
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="mx-10 mt-4"
          onClick={() => {
            setOpen(!open);
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
      </div>
    );
  }
};

export default SideBar;
