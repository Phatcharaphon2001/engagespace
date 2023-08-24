import React, { ReactElement, ReactHTMLElement } from 'react'

interface tableProps {
  header?: ReactElement
  theads: ReactElement,
  tbodies: ReactElement,
  action?:any
}

const Table: React.FC<tableProps> = ({
  header,
  theads,
  tbodies
}) => {
  return (
    <div className='container w-[700px]'>
      <header>{header}</header>
      <table className="table-fixed border-collapse border border-slate-400">
        <thead>{theads}</thead>
        <tbody>{tbodies}</tbody>
      </table>
    </div>
  )
}

export default Table