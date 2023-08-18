"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface editUserEditProps {
    request: Request,
}

interface UserFormState {
    name: string,
    nickname: string,
    email: string,
    title: string,
    team: string,
    mobile: string,
    role: string,
    picture: string,
}

const page: React.FC<editUserEditProps> = ({
    request,
}) => {

    const [formData, setFormData] = useState<UserFormState>({
        name: '',
        nickname: '',
        email: '',
        title: '',
        team: '',
        mobile: '',
        role: '',
        picture: '',
    })

    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(() => {
        // Define the API URL
        const apiUrl = `http://localhost:3000/api/usermaster/getById/${id}`;
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

    async function handleSubmit(event: any) {
        event.preventDefault();
        const apiUrl = `http://localhost:3000/api/usermaster/getById/${id}`
        try {
            const data = await fetch(apiUrl, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
            if (data.status === 201) {
                window.location.href = 'http://localhost:3000/admin/userManagement/'
            }
            
            
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="domain">
                        Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="domain" type="text" placeholder="domain" value={formData?.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
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