import Card from "../components/Card";
import { ProductContainer } from "../styles/layouts";
import Products from "../data/ProductsData.js";

export default function HomePage() {
  return (
    <ProductContainer>
      {Products.map((product) => (
        <Card
          stock={product.stock}
          img={product.img}
          price={product.price}
          title={product.title}
          desc={product.desc}
        />
      ))}
    </ProductContainer>
  );
}
