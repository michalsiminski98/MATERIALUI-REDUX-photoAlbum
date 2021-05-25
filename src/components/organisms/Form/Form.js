import FormField from "../../molecules/FormField/FormField";
import PhotoField from "../../molecules/PhotoField/PhotoField";
import { Wrapper } from "./Form.style";

const Form = () => {
  return (
    <Wrapper>
      <FormField />
      <FormField />
      <PhotoField />
    </Wrapper>
  );
};

export default Form;
