import React, { Component } from "react";
import Input from "./common/Input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };
  // Minimize the use of refs.
  // username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  handleSubmit = (e) => {
    e.preventDefault();
    // call the server
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    // account.username = e.currentTarget.value;
    // Whenever you want to work with properties of an object
    // dinamically, instead of the dot notation you should work with
    // the bracket notation.
    account[input.name] = input.value;
    this.setState({ account });
  };

  // The input fields have their own state, we need to convert them
  // into a controlled element to have a single source of truth.
  // We can do that adding a value attribute, but when we type in
  // the input nothing is going to happen. The reason for this is
  // because currently the username property on our state is an empty
  // string, and because we have bound the value of this input field
  // to our username in the state, it's always showing an empty string.
  // To solve this issue, we need to handle the change event of the
  // input field. Whenever the user types something there, that event
  // is raised and that is a good time for us to get what the user
  // types and update the state.

  // Undefined and null can not be used as values of a controlled
  // element. React will not see this element as a controlled element.

  render() {
    const { account } = this.state;

    return (
      // shift + ctrl + p: encapsular elementos
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
