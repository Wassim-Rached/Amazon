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
    height: 200vh;
    margin-left: var(--sidebar-width);
    max-width: var(--max-page-width);
    max-height: calc(100vh - (var(--nav-height) + var(--footer-height)));
    height: 100%;
    width: 100%;
    padding: 20px;
    overflow: scroll;
    @media only screen and (max-width: 800px){
      margin-left: 0;
      max-width:100vw;
      padding: 10px ;
    }
`

export const ProductContainer = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
gap: 20px;
@media only screen and (max-width: 800px){
  justify-content: space-evenly;

}
`
