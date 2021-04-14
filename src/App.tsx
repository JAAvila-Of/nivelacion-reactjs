import { Card } from "./components/card";
import { Search } from "./components/Search";
import { Link, Route, Switch } from "wouter";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/">Home</Link>
      </nav>
      <Switch>
        <Route component={Search} path="/search" />
        <Route component={Card} path="/" />
      </Switch>
    </>
  );
};

export default App;
