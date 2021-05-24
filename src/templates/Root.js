import Navigation from "../components/organisms/Navigation/Navigation";
import GlobalStyle from "../styles/GlobalStyles";
import MainTemplate from "./MainTemplate";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

function Root() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Navigation />
        <MainTemplate />
      </Router>
    </Provider>
  );
}

export default Root;
