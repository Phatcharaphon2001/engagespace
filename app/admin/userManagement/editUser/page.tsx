"use client"
import React, { useEffect, useState } from 'react'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'


type PageParams ={
    id:string
}

type ContentPageProps = {
    user: User
}

type User  = {
    _id: string,
    name: string,
    email: string,
    nickname: string,
    title: string,
    team: string,
    picture: string,
    mobile: string,
    role: string,
}

type ResponseFromServer = {
    _id: string,
    name: string,
    email: string,
    nickname: string,
    title: string,
    team: string,
    picture: string,
    mobile: string,
    role: string,
}

export async function getStaticProps({
    params
}: GetStaticPropsContext<PageParams>): Promise<GetStaticPropsResult<ContentPageProps>> {
    try{
        let response = await fetch(`http://localhost:3000/api/usermaster/getById/${params?.id}`)
        let responseFromServer: ResponseFromServer = await response.json()

        return {
            props: {
                user: {
                    _id: responseFromServer._id,
                    name: responseFromServer.name,
                    email: responseFromServer.email,
                    nickname: responseFromServer.nickname,
                    title: responseFromServer.title,
                    team: responseFromServer.team,
                    picture: responseFromServer.picture,
                    mobile: responseFromServer.mobile,
                    role: responseFromServer.role,
                }
            }
        };
    } catch(e) {
        console.error(e)
        return {
            props: {
                user: {
                    _id: '',
                    name: '',
                    email: '',
                    nickname: '',
                    title: '',
                    team: '',
                    picture: '',
                    mobile: '',
                    role: '',
                }
            }    
        }
    }
}

export async function getStaticPaths(){
    let users = await fetch('http://localhost:3000/api/usermaster')
    let userFromServer: [User] = await users.json()

    return {
        paths: userFromServer.map((user) => {
            return {
                params: {
                    id: user._id
                }
            }
        }),
        fallback: false
    }
}



const page: React.FC<ContentPageProps> = ({
    user,
}) => {
    const [formData, setFormData] = useState<User>({
        _id: user._id,
        name: '',
        email: '',
        nickname: '',
        title: '',
        team: '',
        picture: '',
        mobile: '',
        role: '',
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        if(formData) {
            try{
                let response = await fetch("http://localhost:3000/api/usermaster/getById/" + _id,{
                    method: 'PUT',
                    body : JSON.stringify(formData),
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                response = await response.json()
                setFormData({
                    _id: '',
                    name: '',
                    email: '',
                    nickname: '',
                    title: '',
                    team: '',
                    picture: '',
                    mobile: '',
                    role: '',
                })
            }catch  (errorMessage: any) {
                setError(errorMessage)
            }
        }else {
            return setError('Please fill in all fields')
        }
    }

  return (
    <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
          name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="domain" type="text" placeholder="domain" value={formData?.name} onChange={(e) => setFormData({...formData,name:e.target.value})}/>
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activeDate">
          nickname
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="text" placeholder="Active Date" value={formData.nickname} onChange={(e) => setFormData({...formData,nickname:e.target.value})}/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
          mobile
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="text" placeholder="Active Date" value={formData?.mobile} onChange={(e) => setFormData({...formData,mobile:e.target.value})}/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="concurrentUser">
          title
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="number" placeholder="Concurrent User" value={JSON.stringify(formData.title)} onChange={(e) => setFormData({...formData,title:(e.target.value)})}/>
      </div>

      <div className="flex items-center justify-between">
        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Save
        </button>
      </div>
      
    </form>
   
  </div>
  )
}

export default page