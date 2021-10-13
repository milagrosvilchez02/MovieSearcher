import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import Input from "./common/Input";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  // schema is completely dependant upon each form
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  // Minimize the use of refs.
  // username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  doSubmit = () => {
    // call the server
    console.log("Submitted");
  };

  /*The input fields have their own state, we need to convert them
  into a controlled element to have a single source of truth.
  We can do that adding a value attribute, but when we type in
  the input nothing is going to happen. The reason for this is
  because currently the username property on our state is an empty
  string, and because we have bound the value of this input field
  to our username in the state, it's always showing an empty string.
  To solve this issue, we need to handle the change event of the
  input field. Whenever the user types something there, that event
  is raised and that is a good time for us to get what the user
  types and update the state.*/

  // Undefined and null can not be used as values of a controlled
  // element. React will not see this element as a controlled element.

  render() {
    const { data, errors } = this.state;

    return (
      // shift + ctrl + p: encapsular elementos
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
