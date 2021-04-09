import { Component } from 'react';

import FormContainer from '../../containers/formContainer';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAccount: false,
    }
  }

  toggleLogin = (boolean) => {
    console.log(boolean);
    this.setState({
      hasAccount: boolean
    });
  }

  render() {
    return (
      <div class="form">
        <FormContainer
          hasAccount={this.state.hasAccount}
          toggleLogin={this.toggleLogin}
        />
      </div>
    )
  }
}

export default UserForm;
