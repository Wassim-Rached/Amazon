import styled from "styled-components";
import { StarBorder, Star } from "@material-ui/icons";
import { useState } from "react";

export default function Sidebar() {
  const [active, setActive] = useState(false);
  return (
    <SidebarStyled className={active ? "activeSideBar" : ""}>
      <div
        className="sidebarClicker"
        onClick={() => {
          setActive(!active);
        }}
      ></div>
      <div className="results">
        <p>Results: 7 products</p>
        <button>Remove Filter</button>
      </div>
      <div className="department">
        <p>department</p>
        <h3>Pants</h3>
        <h3>shirts</h3>
        <h3>keys</h3>
        <h3>watch</h3>
      </div>
      <div className="price">
        <p>Any</p>
        <h3>1$ to 10$</h3>
        <h3>10$ to 100$</h3>
        <h3>100$ to 1000$</h3>
      </div>
      <div className="Review">
        <p>Avg. Customer Review</p>
        <h3>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarBorder /> <span>& Up</span>
        </h3>
        <h3>
          <Star />
          <Star />
          <Star />
          <StarBorder />
          <StarBorder /> <span>& Up</span>
        </h3>
        <h3>
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder /> <span>& Up</span>
        </h3>
        <h3>
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder /> <span>& Up</span>
        </h3>
      </div>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  z-index: 99;
  padding-bottom: var(--footer-height);
  max-width: var(--sidebar-width);
  width: 100%;
  display: flex;
  position: absolute;
  top: var(--nav-height);
  left: 0;
  bottom: var(--footer-height);
  padding-left: 2rem;
  justify-content: space-evenly;
  flex-direction: column;
  height: calc(100vh - (var(--nav-height) + var(--footer-height)));
  background-color: var(--secondary-color);
  border-right: 2px solid var(--dark-font-color);
  transition: all 0.3s ease-in;
  @media only screen and (max-width: 800px) {
    .sidebarClicker {
      cursor: pointer;
      position: absolute;
      right: -20px;
      height: 40px;
      top: calc(50% - 20px);
      width: 40px;
      border-radius: 50%;
      background-color: var(--secondary-color);
    }
    left: calc(0px - var(--sidebar-width));
  }
  div {
    p {
      color: var(--dark-bg-color);
      font-size: 1.4rem;
      font-weight: 600;
    }
    h3 {
      font-size: 1rem;
      font-weight: 300;
    }
  }
  .results {
    button {
      cursor: pointer;
      color: var(--white-color);
      background-color: var(--danger-color);
      border: none;
      font-size: 1rem;
      font-weight: 500;
      padding: 3px;
    }
  }
  .Review {
    h3 {
      display: flex;
      align-items: center;
      color: var(--primairy-color);
      span {
        color: var(--secondary-color);
      }
    }
  }
`;
