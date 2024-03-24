import React from 'react'

export const Notes = ({formData}) => {
  return (
    <section className="mt-10 mt-20 mb-5 ">
        <h3 className='font-semibold'>Additional notes</h3>
        <p className="lg:w-1/2 text-justify">{formData.notes}</p>
      </section>
  )
}
