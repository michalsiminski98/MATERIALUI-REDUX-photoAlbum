import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "40ch",
  },
}));

const FormField = ({ placeholder, value, onChange, name }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        label={placeholder}
        id="filled-margin-dense"
        color="secondary"
        name={name}
        className={classes.textField}
        value={value}
        onChange={(e) => onChange(e)}
        margin="dense"
        variant="filled"
      />
    </>
  );
};

export default FormField;
