import { http } from "../../axios";

const initialState = {
  products: [],
  productIds: [],
  totalPrice: 0,
  finalDiscPrice: 0,
  totalQuantities: 0,
  checkoutProduct: [],
  userId: 1,
  orderId: 4000301,
  date: new Date().toLocaleDateString(),
  totalDiscount: 0,
  orderStatus: "",
};

const CartReducer = (state = initialState, action) => {
  let findProduct;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      const { product, quantity } = action.payload;

      const exists = state.products.find((pr) => pr.product_id === product.product_id);
      if (exists) {
        const updatedArray = state.products.filter((pr) => pr.product_id != product.product_id);
        const updatedIds = state.productIds.filter((pr) => pr != product.product_id);
        const Tprice = state.totalPrice - product.price * quantity;
        const discPrice =
          state.finalDiscPrice + product.discount * quantity;
        const Tquantities = state.totalQuantities - quantity;

        let cart = {
          ...state,
          products: updatedArray,
          productIds: updatedIds,
          totalPrice: Tprice,
          totalQuantities: Tquantities,
          finalDiscPrice: discPrice,
        };
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
      } else {
        const Tprice = state.totalPrice + product.price * quantity;
        const discPrice =
          state.finalDiscPrice + product.discount * quantity;
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;

        let cart = {
          ...state,
          products: [...state.products, product],
          productIds: [...state.productIds, product.product_id],
          totalPrice: Tprice,
          totalQuantities: Tquantities,
          finalDiscPrice: discPrice,
        };
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
      }
    case "GET_LOCAL":
      const { cart } = action.payload;
      return cart;
    case "INC":
      findProduct = state.products.find(
        (product) => product.product_id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.product_id === action.payload
      );
      findProduct.quantity += 1;
      state.products[index] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + findProduct.price,
        finalDiscPrice: state.finalDiscPrice + findProduct.discountPrice,
        totalQuantities: state.totalQuantities + 1,
      };
    case "DEC":
      findProduct = state.products.find(
        (product) => product.product_id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.product_id === action.payload
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        state.products[index] = findProduct;
        return {
          ...state,
          totalPrice: state.totalPrice - findProduct.price,
          totalQuantities: state.totalQuantities - 1,
          finalDiscPrice: state.finalDiscPrice - findProduct.discountPrice,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filtered,
        totalPrice: state.totalPrice - findProduct.price * findProduct.quantity,
        totalQuantities: state.totalQuantities - findProduct.quantity,
        finalDiscPrice:
          state.totalPrice - findProduct.discount * findProduct.quantity,
      };
    case "CHECKOUT":
      http
        .post("/createorder", {
          user_id: state.userId,
          total_amount: state.totalPrice,
          total_items: state.products.length,
          discount: state.totalDiscount,
          coupon_code: "123cfss",
          shipping_address: "m block arifwala",
          date_time: state.date,
          status: 1,
          order_items: state.products,
        })
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
      localStorage.removeItem("cart");
      return {
        ...state,
        checkoutProduct: [
          ...state.checkoutProduct,
          {
            userId: state.userId,
            orderId: state.orderId,
            date: state.date,
            totalProducts: state.products.length,
            totalPrice: state.totalPrice,
            totalDiscount: state.finalDiscPrice,
            orderStatus: "Delivered",
            orderItems: state.products,
          },
        ],
        products: [],
      };
    default:
      // localStorage.setItem('cart',null)
      console.log(state);
      return state;
  }
};

export default CartReducer;
