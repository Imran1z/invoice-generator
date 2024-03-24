import { useEffect, useState } from "react";
import { ClientDetails } from "./components/ClientDetails.js";
import { Dates } from "./components/Dates.js";
import { Footer } from "./components/Footer.js";
import Header from "./components/Header.js";
import { MainDetails } from "./components/MainDetails.js";
import { Notes } from "./components/Notes.js";
import { Table } from "./components/Table.js";

function App() {

  const [showInvoice, setshowInvoice] = useState(false);
  const [formData, setformData] = useState({})
    const handlePrint=()=>{
        window.print()
      }

   const onChangeHandler=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }

  
  
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(formData);
   }

  
  return (
    <>
    <Header handlePrint={handlePrint} showInvoice={showInvoice}/>
      <main className="m-5 p-5 lg:max-w-5xl lg:mx-auto bg-white rounded shadow">
      {
        showInvoice? 
      <div>
      <MainDetails formData={formData}/>
      <ClientDetails formData={formData}/>
      <Dates formData={formData}/> 
      <Table/>
      <Notes formData={formData}/>
      <Footer formData={formData}/>
      <button onClick={() => setshowInvoice(!showInvoice)} className="bg-blue-500 mt-5 text-white border-2 border-blue-500 px-3 py-2 hover:bg-transparent duration-300 md:text-xl hover:text-blue-500 transition-all rounded">
       Edit Information
    </button>
      </div>:(
       <div className="flex flex-col justify-center ">
       {/* name,address,email,phone,bank,account,website,clientname,clientadress,invoice number,invoice date,due date,notes */}
    

       <form className="max-w-xl mx-auto mt-8" onSubmit={submitHandler}>
  <article className="grid grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm">Your full name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="address" className="text-sm">Enter your address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Enter your address"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        maxLength={96}
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-3 gap-6 mt-6">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm">Enter your email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={255}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="website" className="text-sm">Enter your website</label>
      <input
        type="url"
        name="website"
        id="website"
        placeholder="Enter your website"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={96}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm">Enter your phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={12}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-2 gap-6 mt-6">
    <div className="flex flex-col">
      <label htmlFor="bankName" className="text-sm">Enter your bank name</label>
      <input
        type="text"
        name="bankName"
        id="bankName"
        placeholder="Enter your bank name"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="bankAccount" className="text-sm">Enter your bank account number</label>
      <input
        type="text"
        name="bankAccount"
        id="bankAccount"
        placeholder="Enter your bank account number"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={20}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-2 gap-6 mt-20">
    <div className="flex flex-col">
      <label htmlFor="clientName" className="text-sm">Enter your client's name</label>
      <input
        type="text"
        name="clientName"
        id="clientName"
        placeholder="Enter your client's name"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="clientAddress" className="text-sm">Enter your client's address</label>
      <input
        type="text"
        name="clientAddress"
        id="clientAddress"
        placeholder="Enter your client's address"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={96}
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-3 gap-6 mt-6">
    <div className="flex flex-col">
      <label htmlFor="invoiceNumber" className="text-sm">Invoice Number</label>
      <input
        type="text"
        name="invoiceNumber"
        id="invoiceNumber"
        placeholder="Invoice Number"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="invoiceDate" className="text-sm">Invoice Date</label>
      <input
        type="date"
        name="invoiceDate"
        id="invoiceDate"
        placeholder="Invoice Date"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="dueDate" className="text-sm">Due Date</label>
      <input
        type="date"
        name="dueDate"
        id="dueDate"
        placeholder="Due Date"
        className="border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.id}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>
</form>

   
    <button onClick={(e) => { submitHandler(e)}} className="bg-blue-500 mt-10 text-white border-2 border-blue-500 px-3 py-2 hover:bg-transparent duration-300 md:text-xl hover:text-blue-500 transition-all rounded">
       Preview Invoice
    </button>
       </div>
      )
      }

      



    </main>
    </>
  );
}

export default App;
