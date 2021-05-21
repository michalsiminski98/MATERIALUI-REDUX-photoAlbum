import Navigation from "../components/organisms/Navigation/Navigation";
import GlobalStyle from "../styles/GlobalStyles";
import MainTemplate from "./MainTemplate";
import { BrowserRouter as Router } from "react-router-dom";

function Root() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <MainTemplate />
    </Router>
  );
}

export default Root;
