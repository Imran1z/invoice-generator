const Header = ({ handlePrint, showInvoice }) => {
  return (
    <header className="flex justify-between items-center p-2 border-b-2 shadow-sm">
      <div>
        <h2 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h2>
      </div>
    
    </header>
  );
};

export default Header;
