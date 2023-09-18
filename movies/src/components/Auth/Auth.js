import React from 'react'
import AuthForm from './AuthForm'

const Auth = () => {
  const getData = (data) => {
    console.log("Auth", data);
  }
  return (
    <div>
      <AuthForm onSubmit={getData} />
    </div>

  )
}

export default Auth