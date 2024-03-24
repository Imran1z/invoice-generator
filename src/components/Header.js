const Header = ({ handlePrint, showInvoice }) => {
  return (
    <header className="flex justify-between items-center p-2 border-b-2 shadow-sm">
      <div>
        <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h2>
      </div>
      {showInvoice && (
        <div>
          <ul className="flex gap-4">
            <li className="cursor-pointer py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-gray-400 hover:bg-gray-300" onClick={handlePrint}>Print</li>
            <li className="cursor-pointer py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-500">Download</li>
            <li className="cursor-pointer py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-500">Send</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
