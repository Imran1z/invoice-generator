import React from 'react'

export const Footer = ({formData}) => {
  return (
    <footer>
        <ul className="flex flex-wrap items-center justify-center">
          <li><span className="font-bold">Your name:</span>{formData.name}</li>
          <li><span className="font-bold">Your Email:</span>{formData.email}</li>
          <li><span className="font-bold">Phone Number:</span>{formData.phone}</li>
          <li><span className="font-bold">Bank:</span>{formData.bankName}</li>
          <li><span className="font-bold">Account holder:</span>{formData.name}</li>

          <li><span className="font-bold">Account number:</span>{formData.bankAccount}</li>
          <li><span className="font-bold">Website:</span>{formData.website}</li>
        </ul>
      </footer>
  )
}
