import styled from "styled-components";

export default function Card({ img, title, price, stock }) {
  return (
    <CardStyled>
      <div className="head">
        {stock > 0 ? (
          <p className="off">"OUT OF STOCK!"</p>
        ) : (
          <p className="on">"IN STOCK"</p>
        )}
        <img src={img} alt={title} />
      </div>
      <div className="body">
        <div className="container">
          <h2>{title}</h2> <span>{price}$</span>
        </div>
        <button>see more details</button>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  border-radius: 10px;
  overflow: hidden;
  min-width: 280px;
  max-width: 280px;
  width: 100%;
  height: 300px;
  background-color: var(--white-color);
  border: 2px solid var(--dark-color);
  .head {
    position: relative;
    max-width: 260px;
    width: 100%;
    height: 200px;
    margin: 0 auto;
    p {
      text-align: center;
    }
    img {
      margin: 0 auto;
      max-width: 260px;
      width: 100%;
    }
    .off {
      color: var(--danger-color);
    }
    .on {
      color: var(--success-color);
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
      h2 {
        color: var(--white-color);
        font-size: 1.3rem;
        font-weight: 500;
      }
      span {
        color: var(--success-color);
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
    button {
      background-color: var(--white-color);
      color: var(--success-color);
      border: 1px solid var(--dark-bg-color);
      padding: 3px 5px;
      border-radius: 3px;
      cursor: pointer;
      width: 70%;
      margin: 12px 15% 0;
      :hover {
        background-color: var(--success-color);
        color: var(--white-color);
      }
    }
  }
`;
