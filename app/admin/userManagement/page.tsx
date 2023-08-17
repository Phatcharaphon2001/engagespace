"use client"
import UserTable from '@/components/tables/userTable';
import React, {useState, useEffect} from 'react'
import DomainTable from '@/components/tables/DomainTable'




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
  const [domains,setDomains] = useState(null);
  const [users, setUsers] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:3000/api/domain")
    .then(response => response.json())
    .then(data => setDomains(data))
  },[]);
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
      <DomainTable items={domains}/> 
    </div>
  )
}
