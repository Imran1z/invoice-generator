import React from 'react'

export const MainDetails = ({formData}) => {
  return (

      <section className="flex flex-col items-end justify-end">
        <h1 className="text-2xl" >{formData.name}</h1>
        <p>{formData.address}</p>
          
      </section>

  )
}
