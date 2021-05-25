import { Route, Switch } from "react-router";
import Add from "./Add/Add";
import Home from "./Home/Home";
import Login from "./Login/Login";

const MainTemplate = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/add" component={Add} />
    </Switch>
  );
};

export default MainTemplate;
