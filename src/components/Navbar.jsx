import logo from "./../assets/images/logo.png";
const Navbar = () => {
  return (
    
    <nav className="w-full max-w-6xl mx-auto p-4 flex justify-between items-center">
      <div>
        <img src={logo} alt="Netflix Logo" className="w-32 sm:w-40 md:w-48" />
      </div>
      <button className="bg-red-600 px-4 py-2 text-sm sm:text-base text-white font-bold rounded-md">
        Sign In
      </button>
    </nav>

    // <nav className="w-[80vw] m-[auto] flex justify-between items-center">
    //   <div>
    //     <img src={logo} alt="Netflix Logo" className="w-[150px]" />
    //   </div>
    //   <button className="bg-red-600 px-5 py-2 text-white font-bold rounded-md">
    //     Sign In
    //   </button>
    // </nav>
  );
};

export default Navbar;
