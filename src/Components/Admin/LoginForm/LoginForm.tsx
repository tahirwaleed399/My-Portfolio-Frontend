import { TextField } from "@mui/material";
import React from "react";
import { alpha, styled } from "@mui/material/styles";
// import MyInput from '../../Shared/MyInput/MyInput';
import { useLoginMutation } from "../../../Redux/UserApi/User";
import Input from "../../Shared/Input/Input";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuth } from "../../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [login, { isLoading, isSuccess, isError, error }]: any =
    useLoginMutation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
  let [loginInfo, setLoginInfo] = React.useState({ email: "", password: "" });

  React.useEffect(() => {
    console.log({ isLoading, isSuccess, isError, error });
    toast.dismiss();
    if (isLoading) {
      toast.loading("Logging In");

    }
    if (isSuccess) {
      toast.success("Successfully Logged In");
      dispatch(setAuth(true))
      navigate('/admin')
    }
    if (isError) {
      toast.error(error.data.message);

    }
  }, [isLoading, isSuccess, isError, error]);
  function handleLogin() {
    if (loginInfo.email !== "" && loginInfo.password !== "") {
      login(loginInfo);
    } else {
      toast.error("Fill out the form please");
    }
  }

  return (
    <>
      <div className="loginForm">
        <Input
          name="email"
          type="text"
          id="email"
          placeholder="Email"
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
        ></Input>
        <Input
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          loginInfo={loginInfo}
          setLoginInfo={setLoginInfo}
        ></Input>
        <button className="btn btn-outlined btn-sm mb-5" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginForm;
