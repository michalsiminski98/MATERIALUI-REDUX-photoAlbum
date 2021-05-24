import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";

const Login = () => {
  return (
    <section>
      <FormControl>
        <InputLabel htmlFor="email">Email address</InputLabel>
        <Input id="email" aria-describedby="emailHelper" />
        <FormHelperText id="emailHelper">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </section>
  );
};

export default Login;
