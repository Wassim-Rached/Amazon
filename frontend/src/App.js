import styled from 'styled-components'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import { StyledPageContainer } from './styles/layouts';

function App() {
  return (
    <AppStyled>
      <Navbar/>
      <StyledPageContainer>
      <Sidebar/>
      <HomePage/>
      </StyledPageContainer>
      <Footer/>
    </AppStyled>
  );
}
const AppStyled = styled.main`
.activeSideBar{
  transform: translateX(var(--sidebar-width));
}
`

export default App;
