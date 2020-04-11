import React from "react";
//import ErrorComponent from "./error-component";

import "./register-form";
import ErrorComponent from "./error-component";

class RegisterForm extends React.Component {
  state = {
    userName: "",
    email: "",
    password: "",
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  };

  onChangeName(e) {
    this.setState({ userName: e.target.value });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  submitForm(event) {
    event.preventDefault();
    console.log(this.state);
    fetch("https://angularjs.realworld.io/api/users/", {
      method: "POST",
      /* headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
      }, */
      mode: "no-cors",
      body: this.state,
    })
      .then((res) => alert("Submit"))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <ErrorComponent validatForm={this.validatForm} />
        <form onSubmit={(e) => this.submitForm(e)}>
          <input
            type="text"
            placeholder="Username"
            className="input-form"
            value={this.state.userName}
            onChange={(e) => this.onChangeName(e)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-form"
            value={this.state.email}
            onChange={(e) => this.onChangeEmail(e)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-form"
            value={this.state.password}
            onChange={(e) => this.onChangePassword(e)}
          />
          <input type="submit" className="submit-btn" value="Sign up" />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
