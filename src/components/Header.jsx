import React from "react";
import Companylogo from "../assets/navbar-logo.svg";
import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authThunk";

const Header = () => {

    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
  // ----------- handle logout ---------------

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <header>
        <nav
          id="header"
          className="navbar fixed main-content top-0 w-full bg-gray-100"
        >
          <div className="container px-28 py-5">
            <div className="navbar-nav flex">
              <ul className="flex gap-x-10 items-center">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Properties
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Agents
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
              <div className="nav-brand mx-auto">
                <img src={Companylogo} alt="logo-img-1" />
              </div>
              <ul className="flex gap-x-10 ms-auto items-center">
                <li className="nav-item flex items-center">
                  <img src={user.photo} alt="user" className="w-7 h-7 rounded-full " />
                  <h4 className=" text-xs font-medium ms-2">{user.name}</h4>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout} className="nav-link cursor-pointer">
                    <BiLogOut size={22}/>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
