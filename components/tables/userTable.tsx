import React from 'react'


interface UsersTableProps {
  users: any,
}


const userTable : React.FC<UsersTableProps> = ({
  users,
}) => {
  return (
    
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {users?.map((user: any) => (
             <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {user.name}
             </th>
             <td className="px-6 py-4">
                 {user.team}
             </td>
             <td className="px-6 py-4">
                 {user.role}
             </td>
             <td className="px-6 py-4">
                 null
             </td>
             <td className="px-6 py-4">
                 <a href={`/admin/userManagement/editUser?id=${user._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
             </td>
         </tr>
          ))}
         
        </tbody>
    </table>
</div>

  )
}

export default userTable