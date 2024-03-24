import React from 'react'

export const ClientDetails = ({formData}) => {
  return (
    <section className="mt-5 flex flex-col">
    <h1 className='text-3xl text-cyan-500'>Bill To:</h1>
    <h1  className="text-2xl font-semibold">{formData.clientName}</h1>
      <p>{formData.clientAddress}</p>

    </section>  )
}
