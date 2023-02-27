import { http, login } from "../../axios";

const initialState = {
  name: "Hamza Mughal",
  token: null,
  pass: "",
};


const AuthReducer = (state = initialState, action) => {

  switch (action.type) {
    case "REGISTER":
      const { usernameReg, nameReg, passwordReg, emailReg } = action.payload;
      http
        .post("/signup", {
          user_login: usernameReg,
          user_pass: passwordReg,
          user_nicename: nameReg,
          user_email: emailReg,
        })
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
      return state;
    case "LOGIN":
      const { email, password } = action.payload;
      http
        .post("/signin", {
          user_email: email,
          user_pass: password,
        })
        .then((res) => {
          console.log(res)
          localStorage.setItem("token", res.data.token);
          window.location.href='/'
        })
        .catch((e) => {
          console.log(e);
        });
      return {
        ...state,
        token: localStorage.getItem("token"),
        pass: password,
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
