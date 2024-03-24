import React from 'react'

export const Table = ({TableData,ProductList}) => {
  return (
    <>
      <table width="100%">
        <thead>
          <tr className='bg-cyan-100'>
            <td className='font-semibold'>Product/Service Name</td>
            <td className='font-semibold'>Quantity</td>
            <td className='font-semibold'>Unit Price</td>
            <td className='font-semibold'>Amount</td>
          </tr>
          
        </thead>
          <tbody>
          {ProductList&& ProductList.map((product)=>(
            <tr className='border-b-2' key={product.id}>
              <td className='font-semibold'>{product.product}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.amount}</td>
            </tr>
          ))}
            
          </tbody>
      </table>
    </>
   
   )
}
