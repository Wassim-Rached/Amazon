import styled from "styled-components";
import SimpleImageSlider from "react-simple-image-slider";
import ProductSection from "../components/ProductSection";

import { Lock, AccountBalance, Payment } from "@material-ui/icons";
import WhyUs from "../components/WhyUs";

const images = [
  { url: "images/slider1.png" },
  { url: "images/slider3.jpeg" },
  { url: "images/slider11.jpeg" },
];

export default function HomeScreen() {
  return (
    <HomeScreenStyled>
      <div className="sliderContainer">
        <SimpleImageSlider
          showBullets={true}
          showNavs={true}
          width="100%"
          height="400px"
          images={images}
        />
      </div>
      <div className="sectionsContainer">
        <ProductSection title={"Popular products"} />
        <ProductSection title={"new products!"} />
        <ProductSection title={"Free products"} />
      </div>
      <div className="whyUsContainer">
        <WhyUs
          icon={<AccountBalance />}
          title={"installments "}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ipsam."
          }
        />
        <WhyUs
          icon={<Lock />}
          title={"Security"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ipsam."
          }
        />
        <WhyUs
          icon={<Payment />}
          title={"Payment"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ipsam."
          }
        />
      </div>
    </HomeScreenStyled>
  );
}

const HomeScreenStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .sliderContainer {
    width: 100%;
  }
  .sectionsContainer {
    width: 100%;
    max-width: var(--max-width);
    padding: 20px 0;
  }
  .whyUsContainer {
    max-width: var(--max-width);
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;
