import styled from "styled-components";

export const StyledNavContainer = styled.div`
  max-width: var(--max-width);
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 10px;
`;

export const StyledPageContainer = styled.section`
    display: flex;
    min-height: calc(100vh - var(--nav-height));
    width: 100%;
    `

export const ProductContainer = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 20px;
`
