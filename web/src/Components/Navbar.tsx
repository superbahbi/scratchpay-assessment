import React from "react";
import Logo from "../Assets/Images/Brand-logo-Scratch-Horz-RGB@2x.png";
import styled from "styled-components";
import { ReactComponent as Account } from "../Assets/Icons/account.svg";
const StyledNavbar = styled.nav`
  display: flex;
  width: 300px;
  padding: 1rem;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: fixed;

    overflow: auto;
    .logo {
      padding-bottom: 2rem;
      img {
        height: 3em;
      }
    }
    li {
      display: flex;
      a {
        display: block;
        padding: 0.5rem 1rem;
        text-decoration: none;
        .icon {
          padding-right: 0.5rem;
        }
        .text {
          color: ${(props) => props.theme.color.primary.midnight100};
          font-size: 1.5rem;
        }
      }
    }
  }
`;
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <StyledNavbar>
      <ul>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <li>
          <a href="#user">
            <span className="icon">
              <Account />
            </span>
            <span className="text">Accounts</span>
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
};
export default Navbar;
