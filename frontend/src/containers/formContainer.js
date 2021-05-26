import React from 'react';

import SignUp from '../components/user/signUp.js';
import Login from '../components/user/login.js';

const FormContainer = (props) => {

  const hasAccount= props.hasAccount;

  if (hasAccount) {
    return <Login {...props} />
  } else {
    return <SignUp {...props} />
  }
};

export default FormContainer;
