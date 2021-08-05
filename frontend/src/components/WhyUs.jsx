import styled from "styled-components";

export default function WhyUs({ title, desc, icon }) {
  return (
    <WhyUsStyled>
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </WhyUsStyled>
  );
}
const WhyUsStyled = styled.section`
  width: 300px;
  height: 200px;
  padding: 20px;
  .icon > * {
    color: #1e5da5;
    font-size: 2rem;
  }
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--dark-font-color);
  }
  p {
    color: var(--dark-color);
    font-weight: 300;
    font-size: 0.9rem;
  }
`;
