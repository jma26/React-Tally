import { Component } from 'react';

import SignUp from './signUp.js';

class FormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAccount: false,
    }
  }

  render() {
    return (
      <div class="form">
        <SignUp />
      </div>
    )
  }
}

export default FormModal;
