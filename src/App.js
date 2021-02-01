import React from "react";
import "./App.css";
import Login from "./Auth/Components/Login";
import Register from "./Auth/Components/Register";
//import Welcome from "./Auth/Components/Welcome";
import Profile from "./Profile/components/Profile";
import { PROFILE_ROUTE } from "./lib/RouteUrl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path={PROFILE_ROUTE} component={Profile}></Route>
        </Switch>
      </Router>
    </div>
  );
}
//   } else {
//     return (
//       <Router>
//       <div className="App">
//         <Register changeScreen={changeScreen} />
//         <Route exact path='/Login' component={Register}></Route>
//       </div>
//       </Router>
//     );
//   }
// }
export default App;
