import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import useStore from "../../zustand/store";

function Navbar() {
  const users = useStore((state) => state.usersData);

  return (
    <div className="navbar">
      <h2>Users</h2>
      <div className="navbar__link">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/create-user"}>Create user</NavLink>
        <NavLink to={"/all-users"}>
          All users <sup>{users.length}</sup>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
