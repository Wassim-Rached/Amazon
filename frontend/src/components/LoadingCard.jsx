import styled from "styled-components";

export default function LoadingCard() {
  return (
    <LoadingCardStyled>
      <div className="head">
        <p></p>
        <div className="img">
          <div class="lds-dual-ring"></div>
        </div>
      </div>
      <div className="body">
        <div className="container">
          <div className="h2"></div> <div className="span"></div>
        </div>
        <button></button>
      </div>
    </LoadingCardStyled>
  );
}

const LoadingCardStyled = styled.div`
  opacity: 0.7;
  border-radius: 10px;
  overflow: hidden;
  min-width: 280px;
  max-width: 280px;
  width: 100%;
  height: 300px;
  background-color: var(--white-color);
  border: 2px solid var(--dark-color);
  .head {
    //start animation
    lds-dual-ring {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
    .lds-dual-ring:after {
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid var(--secondary-color);
      border-color: var(--secondary-color) transparent var(--secondary-color)
        transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    //end animation

    position: relative;
    max-width: 260px;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    p {
      background-color: var(--dark-font-color);
    }
    .img {
      height: 200px;
      background-color: var(--white-color);
      margin: 0 auto;
      width: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .body {
    background-color: var(--dark-color);
    height: 100px;
    width: 280px;
    .container {
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      .h2 {
        background-color: var(--white-color);
        width: 54%;
      }
      .span {
        background-color: var(--white-color);
        width: 23%;
      }
    }
    button {
      background-color: var(--success-color);
      border: 1px solid var(--dark-bg-color);
      padding: 3px 5px;
      height: 20px;
      border-radius: 3px;
      cursor: progress;
      width: 70%;
      margin: 12px 15% 0;
    }
  }
`;
