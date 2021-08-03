import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>all right reserved</FooterStyled>;
}

const FooterStyled = styled.footer`
  height: var(--footer-height);
  font-weight: 400;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: var(--dark-color);
  z-index: 10;
`;
