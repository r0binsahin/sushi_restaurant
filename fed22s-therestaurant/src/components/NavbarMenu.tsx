import { useEffect, useState } from "react";
import "../navbar.css";
import { Link } from "react-router-dom";
import { Title } from "./styled/Title";

export const NavbarMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const token = localStorage.getItem("userToken");

  const [ease, setEase] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
    setEase(!ease);
  };

  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Title>SUSHIHAKET </Title>
        </Link>

        {
          <ul className={ease ? "list list-ease" : "list list-hidden"}>
            <li className="items">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                startsida
              </Link>
            </li>
            <li className="items">
              <Link
                to="/meny"
                style={{ textDecoration: "none", color: "white" }}
              >
                meny
              </Link>
            </li>
            <li className="items">
              <Link
                to="/bokabord"
                style={{ textDecoration: "none", color: "white" }}
              >
                boka bord
              </Link>
            </li>
            <li className="items">
              <Link
                /*     to="/login"*/
                to={token ? "/admin" : "/login"}
                style={{ textDecoration: "none", color: "white" }}
              >
                admin
              </Link>
            </li>
          </ul>
        }

        <button onClick={toggleNav} className="btn">
          <img
            className="sushi"
            src="https://i.postimg.cc/qv8WY6kS/sushimenu.png"
            alt="sushimenu"
          />
        </button>
      </nav>
    </>
  );
};
