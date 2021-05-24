import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import HomeIcon from "../../atoms/HomeIcon/HomeIcon";
import { StyledNavLink } from "./Navigation.style";
import useStyles from "./NavigationUseStyles";

const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <StyledNavLink to="/">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon />
          </IconButton>
        </StyledNavLink>
        <Typography variant="h6" className={classes.title}>
          Photo Album APP
        </Typography>
        <StyledNavLink to="/">
          <Button color="inherit">Home</Button>
        </StyledNavLink>
        <StyledNavLink to="/login">
          <Button color="inherit">Log in</Button>
        </StyledNavLink>
        <StyledNavLink to="/add">
          <Button color="inherit">Add new photo</Button>
        </StyledNavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
