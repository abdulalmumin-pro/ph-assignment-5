
import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div className="border-b border-gray-300 sticky top-0 z-50 bg-white">
      <nav className="flex justify-between items-center py-4 sm:py-5 lg:py-6 mx-4 sm:mx-8 lg:mx-16">
        
        <img
          src={Logo}
          alt="logo"
          className="w-28 sm:w-32 lg:w-auto"
        />

        {/* Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 items-center">
          <li>
            <a className="text-red-700" href="#">
              Home
            </a>
          </li>

          <li>
            <a href="#">Technologies</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4 lg:gap-8 items-center">
          <button>Sign</button>

          <button className="bg-red-700 py-2 px-4 lg:px-6 rounded-2xl text-white">
            Sign Up
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button className="md:hidden text-2xl">
          ☰
        </button>

      </nav>
    </div>
  );
};

export default Nav;

