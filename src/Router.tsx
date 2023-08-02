import { Switch, Route, BrowserRouter } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} toggleDark={toggleDark} />
        </Route>
        <Route path={process.env.PUBLIC_URL}>
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
