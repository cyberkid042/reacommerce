import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
