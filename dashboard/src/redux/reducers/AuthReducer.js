import { auth } from "../../axios/auth";

const initialState = {
  name: "Hamza Mughal",
  token: null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { email, password } = action.payload;
      console.log(email, password);
      auth
        .post("/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          window.location.href='/dashboard'
        })
        .catch((e) => {
          console.log(e);
        });
      return {
        ...state,
        token: localStorage.getItem("token"),
      };
    case "LOGOUT":
      return {
        token: localStorage.removeItem("token"),
        
      };
    default:
      return {
        ...state,
        token: localStorage.getItem("token")
          ? localStorage.getItem("token")
          : null,
      };
  }
};

export default AuthReducer;
