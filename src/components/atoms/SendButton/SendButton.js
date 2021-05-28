import { Button, Icon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const SelectButton = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      endIcon={<Icon>send</Icon>}
      onClick={onSubmit}
    >
      Send
    </Button>
  );
};

export default SelectButton;
