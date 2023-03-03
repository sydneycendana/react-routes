import Home from "./components/Home";
import Stocks from "./components/Stocks";
import Movies from "./components/Movies";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h1>App Component</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/stocks">
          <Stocks />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
