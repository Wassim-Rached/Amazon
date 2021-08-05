import styled from "styled-components";
import { Search } from "@material-ui/icons";
import { StyledNavContainer } from "../styles/layouts";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <NavbarStyled>
      <StyledNavContainer>
        <div className="left">
          <span>zamping</span>
        </div>
        <div className="middle">
          <input type="text" placeholder="Search..." />
          <Search className="icon" />
        </div>
        <div className="right">
          <ul className={menu ? "active" : ""}>
            <li>sign in</li>
            <li>sign out</li>
            <li>store</li>
            <li>profile</li>
          </ul>
          <div
            className="humberger"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </StyledNavContainer>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  z-index: 999;
  height: var(--nav-height);
  width: 100%;
  background-color: var(--dark-color);
  color: var(--white-color);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  .left {
    span {
      text-transform: capitalize;
      cursor: pointer;
      color: var(--light-font-color);
      font-weight: 600;
      font-size: 1.9rem;
    }
  }
  @media only screen and (max-width: 800px) {
    .left {
      span {
        text-transform: capitalize;
        cursor: pointer;
        color: var(--secondary-color);
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
  .middle {
    display: flex;
    align-items: center;
    height: 35px;
    max-width: 400px;
    width: 100%;
    margin: 0 5px;
    border-radius: 10px;
    background-color: #333;
    overflow: hidden;
    > * {
      outline: none;
      border: none;
      height: 100%;
    }
    input {
      color: var(--white-color);
      background-color: transparent;
      width: 100%;
      margin-left: 5px;
    }
    .icon {
      cursor: pointer;
      color: var(--primairy-color);
      width: 35px;
      height: 100%;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    ul {
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      li {
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        margin-left: 18px;
      }
      li.active {
        color: var(--primairy-color);
      }
      @media only screen and (min-width: 801px) {
        li:hover {
          color: var(--primairy-color);
          border-bottom: 1px solid var(--white-color);
        }
      }
    }
    .humberger {
      display: none;
    }
    @media only screen and (max-width: 800px) {
      ul {
        display: none;
      }
      ul.active {
        z-index: 100;
        position: fixed;
        display: flex;
        justify-content: space-evenly;
        flex-direction: column;
        background-color: var(--dark-bg-color);
        top: var(--nav-height);
        right: 0;
        left: 0;
        bottom: 0;
      }
      .humberger {
        display: flex;
        cursor: pointer;
        width: 35px;
        height: 35px;
        justify-content: space-between;
        flex-direction: column;
        span {
          width: 100%;
          height: 5px;
          background-color: var(--dark-bg-color);
        }
      }
    }
  }
`;
