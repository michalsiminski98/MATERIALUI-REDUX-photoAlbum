import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "../../atoms/HomeIcon/HomeIcon";
import useStyles from "./NavigationUseStyles";

const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Link to="/">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
        </Link>
        <Typography variant="h6" className={classes.title}>
          Photo Album APP
        </Typography>
        <Link to="/">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/login">
          <Button color="inherit">Log in</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
