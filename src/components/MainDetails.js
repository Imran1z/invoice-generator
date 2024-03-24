import React from 'react'

export const MainDetails = ({formData}) => {
  return (

      <section className="flex flex-col items-end justify-end">
        <h1 className="text-3xl uppercase font-bold text-cyan-500" >{formData.name}</h1>
        <p className='text-start'>{formData.address}</p>
          
      </section>

  )
}
