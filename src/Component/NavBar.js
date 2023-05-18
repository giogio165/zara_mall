import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function NavBar({ setLogin, login }) {
  const menuList = ["여성", "남성", "홈", "지속가능한", "펫"];

  const navigate = useNavigate();

  useEffect(() => {
    console.log("login", login);
  }, [login]);

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div className="NavBar">
      <div className="Login_btn">
        <FontAwesomeIcon className="UserIcon" icon={faUser} />
        {login ? (
          <div onClick={() => setLogin(false)}>Logout</div>
        ) : (
          <div onClick={() => navigate("/login")}>Login</div>
        )}
      </div>

      <div className="nav_section">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="searchbar">
        <FontAwesomeIcon className="searchbar_logo" icon={faMagnifyingGlass} />
        <input type="text" onKeyPress={(event) => search(event)} />
      </div>
      <div className="menu_section">
        <ul>
          {menuList.map((it) => (
            <li>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
