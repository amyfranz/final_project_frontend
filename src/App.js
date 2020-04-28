import React, { Component } from "react";
// import { Route, withRouter } from "react-router-dom";
import Dashboard from "./containers/Dashboard.js";
import Authorization from "./containers/Authorization";
import API from "./API";
import { BrowserRouter as Router } from "react-router-dom";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       user: "",
//     };
//   }

//   componentDidMount() {
//     if (localStorage.token) {
//       API.getWithToken("validate", localStorage.token).then((json) =>
//         this.SignIn(json.user, json.token)
//       );
//     }
//   }

//   signOut = () => {
//     this.setState({
//       user: {},
//     });
//     localStorage.removeItem("token");
//     this.props.history.push("/login");
//   };

//   SignIn = (user, token) => {
//     if (token) {
//       this.setState({ user });
//       localStorage.token = token;
//       this.props.history.push("/");
//     }
//   };

//   LogInFormSubmit = (event, data) => {
//     event.preventDefault();
//     API.post("sign_in", data).then(({ user, token }) => {
//       this.SignIn(user, token);
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Route
//           exact
//           path="/login"
//           component={(props) => (
//             <Login {...props} LogIn={this.LogInFormSubmit} />
//           )}
//         />
//         <Route exact path="/signup" component={SignUp}></Route>
//         <Route
//           exact
//           path="/"
//           render={(props) => (
//             <Dashboard
//               signOut={this.signOut}
//               {...props}
//               user={this.state.user}
//               editItem={this.state.editItem}
//             />
//           )}
//         ></Route>
//       </div>
//     );
//   }
// }

// export default withRouter(App);

// // function signUserIn = user => {
// //   this.setState({ user })
// // }

// // function render() {
// //   return this.state.user
// //     ? <Dashboard />
// //     : <AuthContainer />
// // }

// import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      authenticated: false,
    };
  }

  componentDidMount() {
    if (localStorage.token) {
      API.getWithToken("validate", localStorage.token).then((json) =>
        this.SignIn(json.user, json.token)
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.authenticated ? (
          <Router>
            <Dashboard signOut={this.signOut} user={this.state.user} />
          </Router>
        ) : (
          <Authorization LogInFormSubmit={this.LogInFormSubmit} />
        )}
      </div>
    );
  }

  SignIn = (user, token) => {
    if (token) {
      this.setState({ user, authenticated: true });
      localStorage.token = token;
    }
  };

  signOut = () => {
    this.setState({
      user: null,
      authenticated: false,
    });
    localStorage.removeItem("token");
  };

  LogInFormSubmit = (event, data) => {
    event.preventDefault();
    API.post("sign_in", data).then(({ user, token }) => {
      this.SignIn(user, token);
    });
  };
}
