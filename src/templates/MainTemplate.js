import { Route, Switch } from "react-router";
import Home from "./Home/Home";
import Login from "./Login/Login";

const MainTemplate = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default MainTemplate;
