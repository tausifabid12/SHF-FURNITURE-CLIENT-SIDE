import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link
          to="/"
          aria-label="Home"
          title="Home"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/products"
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Products
        </Link>
      </li>
      {user?.email ? (
        <li>
          <Link
            to="/dashboard"
            aria-label="Product pricing"
            title="dashBoard"
            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Dashboard
          </Link>
        </li>
      ) : (
        ""
      )}

      <li>
        <Link
          to="/blogs"
          aria-label="About us"
          title="Blogs"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Blogs
        </Link>
      </li>
    </>
  );

  const navButtons = (
    <>
      {user?.email ? (
        <Link
          onClick={() => logOut()}
          to="/login"
          className="btn  btn-ghost btn-sm text-md  mx-3 lg:h-10 lg:px-6 text-dark transition duration-200 rounded shadow-md  "
          aria-label="Sign up"
          title="Log Out"
        >
          LogOut
        </Link>
      ) : (
        <>
          <Link
            to="/login"
            className="btn  btn-ghost btn-sm text-sm  mx-3 lg:h-10 lg:px-6 text-dark transition duration-200 rounded shadow-md "
            aria-label="Sign up"
            title="Sign in"
          >
            log in
          </Link>

          <Link
            to="/signUp"
            className="btn  btn-ghost btn-sm text-sm px-3 lg:h-10 lg:px-6 text-dark transition duration-200 rounded shadow-md"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </Link>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>

          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className=" normal-case "
          >
            {/* <svg
              className="w-4 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
            <span className=" text-sm lg:text-xl font-bold text-gray-800 uppercase">
              SHF FURNITURE
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">{navButtons}</div>
      </div>
    </>
  );
};

export default Navbar;
