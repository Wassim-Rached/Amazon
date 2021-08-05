import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../ constants/ProductsConstants";

export const ProductListReducer = (state = { loading: true, products: [] },action
) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { products:action.payload.data,loading: false };
    case PRODUCT_LIST_FAIL:
      return { error: action.payload,loading: false };
    default:
      return state;
  }
};
