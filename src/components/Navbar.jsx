import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My Jobs" },
    { path: "/salery", title: "Salary Estimate" },
    { path: "/post-job", title: "Post A Job" },
  ];

  return (
    <header className="max-w-screen-2x1 container mx-auto x2:px-24 px-6">
      <nav className="flex justify-between items-center py-6">
        
        {/* This for logo */}
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www/w3/org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          <span>JOBHUB</span>
        </a>

        {/* this  dynamic routes used to navigate the specifed path */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path} // the to is the prop pasing the from parent to child
                className={({ isActive}) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Signup and login button */}    
        <div className="text-base text-primary font-medium space-x-5">
  <Link to="/login" className="py-2 px-5 border rounded hidden lg:inline-block">Log in</Link>
  <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white hidden lg:inline-block">Sign up</Link>
</div>


        {/* For Mobile */}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>     
          {
            isMenuOpen ? <FaXmark className="w-5 h-5 text-primary"/> : <FaBarsStaggered className="w-5 h-5 text-primary"/>
          }
          </button>
        </div>
      </nav>
      {/* navitems for  moblie*/}
      <div className={`px-4 bg-black  py-5 rounded-sm ${isMenuOpen ? "" :"hidden"}`}>
        <ul>
        {navItems.map(({ path, title }) => (
            <li key={path} className={"text-base text-white first:text-white py-1"}>
              <NavLink
                to={path} // the to is the prop pasing the from parent to child
                className={({ isActive}) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
