import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

export const TableForm = ({ setTableData, TableData ,setProductList,ProductList}) => {
    const [isEditing, setisEditing] = useState(false)
    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        let updatedData = { ...TableData, [id]: value };
    
        // Calculate amount if both quantity and price are present
        if (id === "quantity" || id === "price" ) {
          const quantity = id === "quantity" ? value : TableData.quantity;
          const price = id === "price" ? value : TableData.price;
          updatedData = {
            ...updatedData,
            amount: quantity && price ? quantity * price : ""
          };
        }
    
        setTableData(updatedData);
      };

      const handleSubmit=(e)=>{
        e.preventDefault();
        const newItem={
            id:uuidv4(),
            product:TableData.product,
            quantity:TableData.quantity,
            price:TableData.price,
            amount:TableData.amount

        }
        setTableData({})
        setProductList([...ProductList, newItem]);
        setisEditing(false)
          
    }

    const onDeleteClick=(id)=>{
        const updatedList=ProductList.filter((product)=>product.id !==id);
        setProductList(updatedList);
    }

    const onEditClick=(id)=>{
        const editingRow=ProductList.find((product)=>product.id===id);
        setProductList(ProductList.filter((product)=>product.id !==id))
        setisEditing(true);
        setTableData({
            id:editingRow.id,
            product:editingRow.product,
            quantity:editingRow.quantity,
            price:editingRow.price,
            amount:editingRow.amount
        })
        
    }
    
    console.log(ProductList)
    return (
    <>
     <form onSubmit={handleSubmit}>
     <div className="flex flex-col">
      <label htmlFor="product">Product/Service</label>
      <input
        type="text"
        name="product"
        id="product"
        required
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        placeholder="Product/Service"
        value={TableData.product||''}
        onChange={(e)=>onChangeHandler(e)}
      />
      </div>

      <div>
      <article className="grid grid-cols-3 gap-6 mt-6 ">
      <div className="flex flex-col">

      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        required
        id="quantity"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        placeholder="Quantity"
        value={TableData.quantity||''}
        onChange={(e)=>onChangeHandler(e)}
      />
      </div>
      <div className="flex flex-col">

      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        required
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        placeholder="Price"
        value={TableData.price||''}
        onChange={(e)=>onChangeHandler(e)}
      />
            </div>

       <div className="flex flex-col">
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        name="amount"
        required
        readOnly
        id="amount"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        placeholder="Amount"
        value={(TableData.quantity && TableData.price) ? TableData.quantity * TableData.price : ''}
        onChange={(e)=>onChangeHandler(e)}
      />
            </div>

      </article>
      </div>
      <button className="bg-blue-500 mt-10 text-white border-2 border-blue-500 px-3 py-2 hover:bg-transparent duration-300 md:text-xl hover:text-blue-500 transition-all rounded" type="submit">{isEditing?'Edit Item':'Add Item'}</button>
     </form>
     <ul className="mt-5">
  {ProductList && ProductList.map((product) => (
    <div key={product.id} className="bg-gray-50 px-4 border-gray-700 border-2 mt-1 py-3 flex flex-col sm:flex-row w-full rounded-md">
      <div className="sm:grid sm:grid-cols-6 sm:gap-6 sm:px-6 flex flex-col sm:flex-row w-full">
        <div className="sm:col-span-2 text-sm font-medium text-gray-500 truncate">Product: {product.product}</div>
        <div className="sm:col-span-1 text-sm font-medium text-gray-500">Quantity: {product.quantity}</div>
        <div className="sm:col-span-1 text-sm font-medium text-gray-500">Price: {product.price}</div>
        <div className="sm:col-span-1 text-sm font-medium text-gray-500">Amount: {product.amount}</div>
        <div className="flex justify-end sm:col-span-1">
          <button className="mr-3 text-indigo-600 hover:text-indigo-900" onClick={()=>onEditClick(product.id)}>Edit</button>
          <button className="text-red-600 hover:text-red-900" onClick={()=>onDeleteClick(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  ))}
</ul>

    </>
  );
};
