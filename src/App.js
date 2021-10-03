import { Login, Register, ProductEntry } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/registro">
          <Register />
        </Route>
        <Route path="/entrar">
          <Login />
        </Route>
        <Route path="/productEntry">
          <ProductEntry />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
