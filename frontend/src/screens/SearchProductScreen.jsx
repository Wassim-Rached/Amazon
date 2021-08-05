import Card from "../components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListProducts } from "../actions/ProductsActions";
import { ProductContainer } from "../styles/layouts";
import LoadingCard from "../components/LoadingCard";
import styled from "styled-components";

export default function SearchProductPage() {
  const dispatch = useDispatch();
  const ProductsList = useSelector((state) => state.productsList);
  const { loading, error, products } = ProductsList;

  useEffect(() => {
    dispatch(ListProducts({}));
  }, [dispatch]);

  return (
    <SearchProductPageStyled>
      <ProductContainer>
        {loading ? (
          <>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
            <LoadingCard></LoadingCard>
          </>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            {products.map((product) => (
              <Card key={product._id} product={product} />
            ))}
          </>
        )}
      </ProductContainer>
    </SearchProductPageStyled>
  );
}
const SearchProductPageStyled = styled.div`
  padding: 20px;
  width: 1fr !important;
  @media only screen and (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }
`;
