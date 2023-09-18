import React from 'react'
import AuthForm from '../Auth/AuthForm'
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { useDispatch } from 'react-redux';
import { adminActions } from '../../store';

const Admin = () => {
  const dispatch = useDispatch();
  const onResReceived = (data) => {
    console.log(data);
    dispatch(adminActions.login());
    localStorage.setItem("adminId",data.id );
    localStorage.setItem("token",data.token);
  };

  const getData = (data) => {
    console.log('Admin', data);
    sendUserAuthRequest(data.inputs)
    .then (onResReceived)
      .catch((err) => console.log(err));
  }


  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin={true} />
    </div>
  )
}

export default Admin