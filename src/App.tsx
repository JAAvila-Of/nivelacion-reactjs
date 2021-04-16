import { Home } from "pages/Home";
import { Search } from "pages/Search";

import { Link, Route, Switch } from "wouter";
import { PokeContextProvider } from "./contexts/PokeDataContext";
import { PokeNameContextProvider } from "./contexts/PokeNameContext";
import { PokeListContextProvider } from "contexts/PokeDataList";

const App = () => {
  return (
    <>
      <nav className="flex w-full justify-center space-x-3 sticky top-0">
        <Link to="/search">Search</Link>
        <Link to="/">Home</Link>
      </nav>
      <PokeListContextProvider>
        <PokeContextProvider>
          <PokeNameContextProvider>
            <Switch>
              <Route component={Search} path="/search" />
              <Route component={Home} path="/" />
            </Switch>
          </PokeNameContextProvider>
        </PokeContextProvider>
      </PokeListContextProvider>
    </>
  );
};

export default App;
