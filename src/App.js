import {  useState } from "react";
import { ClientDetails } from "./components/ClientDetails.js";
import { Dates } from "./components/Dates.js";
import { Footer } from "./components/Footer.js";
import Header from "./components/Header.js";
import { MainDetails } from "./components/MainDetails.js";
import { Notes } from "./components/Notes.js";
import { Table } from "./components/Table.js";
import { TableForm } from "./components/TableForm.js";

function App() {

  const [showInvoice, setshowInvoice] = useState(false);
  const [formData, setformData] = useState({})
  const [TableData, setTableData] = useState({});
  const [ProductList, setProductList] = useState([])
    const handlePrint=()=>{
        window.print()
      }

   const onChangeHandler=(e)=>{
    setformData({...formData,[e.target.id]:e.target.value})
  }

  
  
  const submitHandler=(e)=>{
    e.preventDefault(); // Prevent default form submission
    console.log(formData);
    console.log(TableData)
   }

  
  return (
    <>
    <Header handlePrint={handlePrint} showInvoice={showInvoice}/>
      <main className="m-5 p-5 lg:max-w-4xl lg:mx-auto bg-white rounded shadow">
      {
        showInvoice? 
      <div>
      <MainDetails formData={formData}/>
      <ClientDetails formData={formData}/>
      <Dates formData={formData}/> 
      <Table TableData={TableData} ProductList={ProductList}/>
      <Notes formData={formData}/>
      <Footer formData={formData}/>
      <button onClick={() => setshowInvoice(!showInvoice)} className="bg-blue-500 mt-5 text-white border-2 border-blue-500 px-3 py-2 hover:bg-transparent duration-300 md:text-xl hover:text-blue-500 transition-all rounded">
       Edit Information
    </button>
      </div>:(
       <div className="flex flex-col justify-center ">
       {/* name,address,email,phone,bank,account,website,clientname,clientadress,invoice number,invoice date,due date,notes */}
    

  <article className="grid grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label htmlFor="name" className="text-sm font-semibold">Your company name</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your company name"
        className="border bg-gray-100 text-gray-700 border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        required
        value={formData.name}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="address" className="text-sm  font-semibold">Enter your company address</label>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Enter your address"
        className="border border-gray-300 bg-gray-100 text-gray-700 rounded-md px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        required
        maxLength={96}
        value={formData.address}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="gst" className="text-sm font-semibold">Enter your GST number</label>
      <input
        type="text"
        name="gst"
        id="gst"
        placeholder="Enter your GST number"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        required
        maxLength={96}
        value={formData.gst}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="website" className="text-sm font-semibold">Enter your website</label>
      <input
        type="url"
        name="website"
        id="website"
        placeholder="Enter your website"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={96}
        required
        autoComplete="off"
        value={formData.website}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-3 gap-6 mt-6">
    <div className="flex flex-col">
      <label htmlFor="email" className="text-sm font-semibold">Enter your email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={255}
        autoComplete="off"
        required
        value={formData.email}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    {/* //efefefe */}

    
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-sm font-semibold">Enter your phone</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Enter your phone"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={12}
        autoComplete="off"
        required
        value={formData.phone}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
    <div className="flex flex-col">
      <label htmlFor="holder" className="text-sm font-semibold">Enter your Account Name</label>
      <input
        type="text"
        name="accountHolder"
        id="accountHolder"
        placeholder="Enter your Account Name"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={12}
        autoComplete="off"
        required
        value={formData.accountHolder}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-2 gap-6 mt-6">
    <div className="flex flex-col">
      <label htmlFor="bankName" className="text-sm font-semibold">Enter your bank name</label>
      <input
        type="text"
        name="bankName"
        id="bankName"
        placeholder="Enter your bank name"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        required
        value={formData.bankName}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="bankAccount" className="text-sm font-semibold">Enter your bank account number</label>
      <input
        type="text"
        name="bankAccount"
        id="bankAccount"
        placeholder="Enter your bank account number"
        className="border border-gray-300 rounded-md bg-gray-100 text-gray-700 px-4 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={20}
        autoComplete="off"
        required
        value={formData.bankAccount}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-2 gap-6 mt-20">
    <div className="flex flex-col">
      <label htmlFor="clientName" className="text-sm font-semibold">Enter your client's name</label>
      <input
        type="text"
        name="clientName"
        id="clientName"
        placeholder="Enter your client's name"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={56}
        autoComplete="off"
        required
        value={formData.clientName}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="clientAddress" className="text-sm font-semibold">Enter your client's address</label>
      <input
        type="text"
        name="clientAddress"
        id="clientAddress"
        required
        placeholder="Enter your client's address"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        maxLength={96}
        autoComplete="off"
        value={formData.clientAddress}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  <article className="grid grid-cols-3 gap-6 mt-6 mb-20">
    <div className="flex flex-col">
      <label htmlFor="invoiceNumber" className="text-sm font-semibold">Invoice Number</label>
      <input
        type="text"
        required
        name="invoiceNumber"
        id="invoiceNumber"
        placeholder="Invoice Number"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.invoiceNumber}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="invoiceDate" className="text-sm font-semibold">Invoice Date</label>
      <input
        type="date"
        required
        name="invoiceDate"
        id="invoiceDate"
        placeholder="Invoice Date"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.invoiceDate}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

    <div className="flex flex-col">
      <label htmlFor="dueDate" className="text-sm font-semibold">Due Date</label>
      <input
        type="date"
        required
        name="dueDate"
        id="dueDate"
        placeholder="Due Date"
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.dueDate}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>
  </article>

  {/* table form */}
    <TableForm  setTableData={setTableData} TableData={TableData} setProductList={setProductList} ProductList={ProductList} />
 

  <div className="flex flex-col mt-20">
      <label htmlFor="notes" className="text-sm font-semibold">Additional Notes</label>
      <textarea
        required
        name="notes"
        id="notes"
        placeholder="Adiitional Information"
        rows={10}
        cols={30}
        className="border border-gray-300 rounded-md px-4 bg-gray-100 text-gray-700 py-2 mt-1 focus:outline-none focus:border-blue-500"
        autoComplete="off"
        value={formData.notes}
        onChange={(e)=>onChangeHandler(e)}
      />
    </div>

   
<button type="submit"
  onClick={(e) => { 
    setshowInvoice(!showInvoice);
    submitHandler(e) // Toggle the showInvoice state
  }} 
  className="bg-blue-500 mt-10 text-white border-2 border-blue-500 px-3 py-2 hover:bg-transparent duration-300 md:text-xl hover:text-blue-500 transition-all rounded">
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
