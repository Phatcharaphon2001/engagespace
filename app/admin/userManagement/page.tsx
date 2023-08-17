"use client"
import UserTable from '@/components/tables/userTable';
import React, {useState, useEffect} from 'react'




  interface User {
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

export default function UserMananementPage() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/usermaster')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(resJson => {
        setUsers(resJson);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <UserTable users={users} />
    </div>
  )
}