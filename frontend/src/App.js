// import styled from 'styled-components'
import { StyledPageContainer } from './styles/layouts';
//components
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
//screens
import SearchProductPage from './screens/SearchProductScreen';
import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <div>
      <Navbar/>
      <StyledPageContainer>
       <Sidebar/>
      <SearchProductPage/> 
      {/* <HomeScreen/> */}
      </StyledPageContainer>
      <Footer/>
    </div>
  );
}

export default App;
