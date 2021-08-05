import { createGlobalStyle } from "styled-components";

const GloblaStyles = createGlobalStyle`
:root{
    --primairy-color:#fbde04;
    --secondary-color:#6179c1;
    --dark-color:#3b3d33;
    --white-color:#fff;
    --dark-font-color:#3d3814;
    --light-font-color:#fff;
    --dark-bg-color:#333;
    --danger-color:#c82c2c;
    --success-color:#0b7b4c;
    //px    
    --sidebar-width:300px;
    --max-page-width:calc(100vw - var(--sidebar-width));
    --max-width:998px;
    --least-width:320px;
    --nav-height:70px;
    --footer-height:50px;
}
body{
    
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    background-color:var(---white-color);
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Titillium Web', sans-serif;
    font-size: 1rem;
}
a{
    text-decoration: none;
    color: inherit;
    font-size: inherit;
}li{
    list-style: none;
}
//custom styles
.activeSideBar{
  transform: translateX(0);
}
`;

export default GloblaStyles;
