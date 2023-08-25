"use client"
import React, { useState } from 'react'
import Image from 'next/image'

interface moodObjectUploadProps{
    title:string
}

const MoodObjectUpload:React.FC<moodObjectUploadProps> = ({
    title
}) => {
    const [img, setImg] = useState("")
    const fileChange = (e: any) => {
        console.log(e.target.files);
        setImg(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='flex w-fit h-fit items-center p-2 gap-5'>
            <h2 className='font-bold'>{title}</h2>
            <div className='w-[55px] h-[55px] flex justify-center items-center border-[1px] border-black rounded-md text-center font-bold'>
                <input onChange={(event) => { fileChange(event) }} type="file" style={{ display: 'none' }} id="inputfile" accept="images/*" />
                {
                    img ? (
                        <>
                            <a className="p-1" href="javascript:document.getElementById('inputfile').click(); ">
                                <Image
                                    src={img}
                                    width={55}
                                    height={55}
                                    alt="Picture of the author"
                                />
                            </a>
                        </>
                    ) : <a className="p-1" href="javascript:document.getElementById('inputfile').click(); ">+</a>
                }

            </div>

            <button className='w-[100px] h-[36px] border-[1px] border-[#3298FF] rounded-md font-bold text-[#3298FF]'>Upload</button>
            <input className='w-[191px] h-[36px] border-[1px] border-[#707070] rounded-md p-[7px]' type="text" placeholder='Mood Description' />
            <button className='w-[75px] h-[36px] border-[1px] bg-[#3298FF] rounded-md font-bold text-white'>+Tag</button>
        </div>
    )
}

export default MoodObjectUpload