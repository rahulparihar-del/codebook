import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, logout } from "../../services";
import ErrorPage from "../../pages/Error/ErrorPage";

export const DropdownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Retrieve the email from sessionStorage
  useEffect(() => {
    try {
      async function fetchData() {
        const data = await getUser();
        data.email ? setEmail(data.email) : handleLogout();
      }
      fetchData();
    } catch (error) {
      setErrorMessage(error.message);
    }
  }, []); // eslint-disable-line 

  const handleLogout = () => {
    logout();
    setDropDown(false);
    navigate("/");
  };

  return (
    <>
      {errorMessage ? (
        <ErrorPage errorMessage={errorMessage} />
      ) : (
        <>
          <div
            id="dropdownAvatar"
            className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div className="font-medium truncate">{email}</div>
            </div>
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <Link
                  onClick={() => setDropDown(false)}
                  to="/"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  All eBooks
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setDropDown(false)}
                  to="/dashboard"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <div className="py-1">
              <span
                onClick={handleLogout}
                className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Log out
              </span>
            </div>
          </div>
        </>
      )}
    </>
  );
};
