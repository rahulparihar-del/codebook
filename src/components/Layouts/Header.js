import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import { useState } from "react";
import Search from "../Sections/Search";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { useCart } from "../../context";

const Header = () => {

  const {cartList} = useCart();

  const [showSearch, setShowSearch] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  return (
    <header>
      <nav className="bg-white dark:bg-dark">
        <div className="border-b border-slate-200 dark:border-zinc-500 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            {/* <span
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span> */}
            <span
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropDown(!dropDown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropDown && ( token ? <DropdownLoggedIn setDropDown={setDropDown}  /> : <DropdownLoggedOut  setDropDown={setDropDown}/> )}
          </div>
        </div>
      </nav>
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </header>
  );
};

export default Header;
