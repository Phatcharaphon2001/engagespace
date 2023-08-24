import React, { ReactElement, useEffect, useState } from 'react'
import Table from './Table'



const userTable = () => {
    const [users, setUsers] = useState<[]>();
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

    const header:ReactElement = (
        <header>UserManageMent</header>
    )

    const theadsElement = (): ReactElement => {
        const lists = ['Email', 'Team', 'Role', 'Grant Access', 'Action']
        return (
            <tr>
                {
                    lists.map((item) => (
                        <th scope='col' className="border border-slate-300">{item}</th>
                    ))
                }
            </tr>
        )
    }

    const tbodiesElement = (): ReactElement => {
        return (
            <>
                {
                    users?.map((item: any) => (
                        <tr>
                            <td scope='row' className="w-[20%] border border-slate-300 border-collapse">{item?.email}</td>
                            <td scope='row' className="w-[20%] border border-slate-300">{item?.team}</td>
                            <td scope='row' className="w-[20%] border border-slate-300">{item?.role}</td>
                            <td scope='row' className="w-[20%] border border-slate-300">{item?.grantaccess}</td>
                            <td scope='row' className="w-[20%] border border-slate-300">
                                <button className='mr-[10px]'>Edit</button>
                                <button className='mr-[10px]'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </>
        )
    }

    return (
        <Table
            header={header} 
            theads={theadsElement()} 
            tbodies={tbodiesElement()} 
        />
    )
}

export default userTable