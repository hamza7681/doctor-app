const initalState = {
  product: {},
};

const ProductReducer = (state = initalState, action) => {
  switch (action.type) {
    // case "PRODUCT":
     
    //   return {
    //     ...state,
    //     product: productsList.find(
    //       (product) => product.id === parseInt(action.id)
    //     ),
    //   };
    default:
      return state;
  }
};

export default ProductReducer;
