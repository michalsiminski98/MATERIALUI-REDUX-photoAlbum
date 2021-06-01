import { useReducer } from "react";
import FormTitle from "../../components/atoms/FormTitle/FormTitle";
import LogInButton from "../../components/atoms/LogInButton/LogInButton";
import FormField from "../../components/molecules/FormField/FormField";
import { StyledSection, StyledPaper, Form } from "./Login.style";

const initialValues = {
  email: "",
  password: "",
};

function loginReducer(state, action) {
  switch (action.type) {
    case "setFormValue":
      return { ...state, [action.name]: [action.value] };
    case "inc":
      return state;
    default:
      throw new Error();
  }
}

const Login = () => {
  const [formValues, setFormValues] = useReducer(loginReducer, initialValues);
  return (
    <StyledSection>
      <StyledPaper elevation={3}>
        <Form>
          <FormTitle title="Log in" />
          <FormField
            id="name"
            placeholder="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                type: "setFormValue",
                name: "email",
                value: e.target.value,
              })
            }
            name="email"
          />
          <FormField
            id="password"
            placeholder="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                type: "setFormValue",
                name: "password",
                value: e.target.value,
              })
            }
            name="password"
          />
          <LogInButton />
        </Form>
      </StyledPaper>
    </StyledSection>
  );
};

export default Login;
