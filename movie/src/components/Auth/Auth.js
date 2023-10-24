import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendUserAuthRequest } from "../../api-helpers/api-helpers";
import { userActions } from "../../store";
import AuthForm from "./AuthForm";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    console.log(data);
    dispatch(userActions.login());
    localStorage.setItem("userId", data._id);
    navigate("/");
  };
  const getData = (data) => {
    console.log(data);
    console.log('111111111111111111111111111111111111111111111111')
    sendUserAuthRequest(data.inputs, data.signup)
      .then(onResReceived)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
  );
};

export default Auth;
