"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface domainEditProps {
  request: Request,
}

interface DomainFormState {
  domainName: string,
  activeDate:string,
  endDate:string,
  concurrentUser:Number
}

const Page: React.FC<domainEditProps> = ({
  request,
}) => {

  const [formData,setFormData] = useState<DomainFormState>({
    domainName:'',
    activeDate:'',
    endDate:'',
    concurrentUser:0
  })

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  useEffect(() => {
    // Define the API URL
    const apiUrl = `http://localhost:3000/api/domain/${id}`;
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFormData(data);
        //setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        //setLoading(false);
      });
  }, []);

  async function handleSubmit(event:any){
    event.preventDefault(); 
    const apiUrl = `http://localhost:3000/api/domain/${id}`
      try{
        const data = await fetch(apiUrl,{
          method:"PUT",
          headers: {
            "Content-Type": "application/json",
    
          },
          body:JSON.stringify(formData)
        })
        if(data.status === 201){
          window.location.href = 'http://localhost:3000/admin/userManagement/'
        }
      }catch(error){
        console.log(error);

      }
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
            Domain
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="domain" type="text" placeholder="domain" value={formData?.domainName} onChange={(e) => setFormData({...formData,domainName:e.target.value})}/>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="activeDate">
            Active Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="text" placeholder="Active Date" value={formData.activeDate} onChange={(e) => setFormData({...formData,activeDate:e.target.value})}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="text" placeholder="Active Date" value={formData?.endDate} onChange={(e) => setFormData({...formData,endDate:e.target.value})}/>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="concurrentUser">
            Concurrent User
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="activeDate" type="number" placeholder="Concurrent User" value={JSON.stringify(formData.concurrentUser)} onChange={(e) => setFormData({...formData,concurrentUser:Number(e.target.value)})}/>
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

export default Page