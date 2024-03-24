import React from 'react'

export const Footer = ({formData}) => {
  return (
    <footer>
        <ul className="flex flex-wrap items-center justify-center border-t-2 border-gray-300 p-5">
          <li className='m-2'><span className="font-bold">Email:</span>{formData.email}</li>
          <li className='m-2'><span className="font-bold">Phone Number:</span>{formData.phone}</li>
          <li className='m-2'><span className="font-bold">Bank:</span>{formData.bankName}</li>
          <li className='m-2'><span className="font-bold">Account holder:</span>{formData.accountHolder}</li>
          <li className='m-2'><span className="font-bold">Account number:</span>{formData.bankAccount}</li>
          <li className='m-2'><span className="font-bold">GST number:</span>{formData.gst}</li>
          <li className='m-2'><span className="font-bold">Website:</span><a href={formData.website} target='blank' rel='noopenner noreferrer'>{formData.website}</a></li>
        </ul>
      </footer>
  )
}
