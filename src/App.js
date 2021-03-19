import "./App.css";
import Login from "./containers/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/log-user'>
          <Login />
        </Route>
        <Route exact path='/' render={() => "entro jeje"} />
        {/* <Route path='/*' component={} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
