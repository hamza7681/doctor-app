const initialState = {
  fname: "",
  lname: "",
  username: "",
  email: "",
  shipAdd: "",
  billAdd: "",
  phone: "",
  password: "",
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_PROFILE":
      const {
        fname,
        lname,
        username,
        email,
        shipAdd,
        billAdd,
        password,
        phone,
      } = action.payload;
      return {
        ...state,
        fname: fname,
        lname: lname,
        username: username,
        email: email,
        shipAdd: shipAdd,
        billAdd: billAdd,
        phone: phone,
        password: password,
      };
    default:
      return state;
  }
};

export default ProfileReducer;
