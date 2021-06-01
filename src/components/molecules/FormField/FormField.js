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

const FormField = ({ placeholder, value, onChange, name, id }) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        label={placeholder}
        id={id}
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
