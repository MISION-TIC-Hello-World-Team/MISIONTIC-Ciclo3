import { SalesMade, SalesRecord, SaleProductsRegistration } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/resumen">
          <SalesMade />
        </Route>
        <Route path="/registro">
          <SaleProductsRegistration />
        </Route>
        <Route path="/entrar">
          <SalesRecord />
        </Route>
        <Route path="/">
          <SalesMade />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
