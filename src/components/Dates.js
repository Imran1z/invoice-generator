import React from 'react'

export const Dates = ({formData}) => {
  return (
<article className="mt-5 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Invoice number:</span> {formData.invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice date:</span>  {formData.invoiceDate}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Due date:</span> {formData.dueDate}
          </li>
        </ul>
      </article>   )
}
