import React from 'react'
import DomainModal from '../modals/DomainModal'

interface DomainTableProps {
  items: any,
}

const DomainTable: React.FC<DomainTableProps> = ({
  items
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Domain
            </th>
            <th scope="col" className="px-6 py-3">
              Active Date
            </th>
            <th scope="col" className="px-6 py-3">
              End Date
            </th>
            <th scope="col" className="px-6 py-3">
              Concurrent User
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            items?.map((item: any) => (
              <tr key={item._id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  {item.activeDate}
                </td>
                <td className="px-6 py-4">
                  {item.endDate}
                </td>
                <td className="px-6 py-4">
                {item.
concurrentUser}
                </td>
                <td className="px-6 py-4">
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-10">Edit</a>
                  <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DomainTable