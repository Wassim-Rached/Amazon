import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { ListProducts } from "../actions/ProductsActions";
import Card from "./Card";
import LoadingCard from "./LoadingCard";

export default function ProductSection({ title }) {
  const dispatch = useDispatch();
  const ProductsList = useSelector((state) => state.productsList);
  const { loading, error, products } = ProductsList;

  useEffect(() => {
    dispatch(ListProducts({}));
  }, [dispatch]);
  return (
    <ProductSectionStyled>
      <div className="title">{title}</div>
      <div className="productContainer">
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
      </div>
    </ProductSectionStyled>
  );
}

const ProductSectionStyled = styled.section`
  /* border: 1px solid var(--dark-color); */
  width: calc(100vw - 40px);
  margin: 20px;
  max-width: var(--max-width);
  .title {
    margin-bottom: 10px;
    font-size: 1.3rem;
    font-weight: 500;
    color: var(--dark-font-color);
  }
  .productContainer {
    border-left: 10px solid #444;
    border-right: 10px solid #444;
    padding: 20px 0;
    width: 100%;
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    overflow: scroll;
    gap: 15px;
    background-color: #444;
  }
`;
