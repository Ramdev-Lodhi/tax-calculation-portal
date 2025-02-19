const Navbar = () => {
  return (
    <nav className="bg-blue-500 max-w-6xl w-full p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Tax Calculator</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              History
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:underline">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
