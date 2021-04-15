import { Card } from "./components/card";
import { Search } from "./components/Search";
import { Link, Route, Switch } from "wouter";
import { PokeContextProvider } from "./contexts/PokeDataContext";
import {PokeNameContextProvider} from "./contexts/PokeNameContext";

const App = () => {
  return (
    <>
      <nav>
        <Link to="/search">Search</Link>
        <Link to="/">Home</Link>
      </nav>
      <PokeContextProvider>
      <PokeNameContextProvider>
        <Switch>
          <Route component={Search} path="/search" />
          <Route component={Card} path="/" />
        </Switch>
        </PokeNameContextProvider>
      </PokeContextProvider>
    </>
  );
};

export default App;
