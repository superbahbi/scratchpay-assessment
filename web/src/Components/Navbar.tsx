import React from "react";
import Logo from "../Assets/Images/Brand-logo-Scratch-Horz-RGB@2x.png";
import HeartLogo from "../Assets/Images/Brand-logo-Scratch-App-Borrower-RGB@2x.png";
import styled from "styled-components";
// import { ReactComponent as Home } from "../Assets/Icons/home.svg";
// import { ReactComponent as Account } from "../Assets/Icons/account.svg";
import { FaHome, FaUsers } from "react-icons/fa";
import { INavbarProps } from "../Utils/Iterfaces";
const StyledNavbar = styled.nav`
  display: flex;
  position: relative;
  padding-right: 2em;
  width: 200px;
  @media (max-width: 980px) {
    padding-right: 4em;
  }
  .container {
    position: fixed;
    top: 0;
  }
  #header {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }

  .logo {
    display: block;
    height: 40px;
    background-image: url(${Logo});
    background-repeat: no-repeat;
    background-size: contain;
    @media (max-width: 980px) {
      background-image: url(${HeartLogo});
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0.5rem 0.6rem;
    display: flex;
    align-items: center;
  }
  .nav-link {
    display: inline-block;
    color: ${(props) => props.theme.color.primary.midnight100};
    text-decoration: none;

    svg {
      fill: ${(props) => props.theme.color.primary.midnight100};
    }
    .icon {
      vertical-align: middle;
      font-size: 1.2rem;
    }
    .text {
      @media (max-width: 980px) {
        display: none;
      }
      padding-left: 0.3rem;
      vertical-align: top;
    }
  }
  .active {
    color: ${(props) => props.theme.color.primary.midnight50};
    svg {
      fill: ${(props) => props.theme.color.primary.midnight50};
    }
  }
`;
/**
 * Navbar component
 * no props needed
 */
const Navbar: React.FC<INavbarProps> = () => {
  return (
    <StyledNavbar>
      <div className="container">
        <header id="header" role="navigation">
          <div className="logo"></div>

          <nav id="nav-bar">
            <ul>
              <li>
                <a className="nav-link" href="#home">
                  <span className="icon">
                    <FaHome />
                  </span>
                  <span className="text">Home</span>
                </a>
              </li>
              <li>
                <a className="nav-link active" href="#account">
                  <span className="icon">
                    <FaUsers />
                  </span>
                  <span className="text">Account</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </StyledNavbar>
  );
};
export default Navbar;
