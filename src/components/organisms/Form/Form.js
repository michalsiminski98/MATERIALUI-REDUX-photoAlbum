import { useState } from "react";
import SendButton from "../../atoms/SendButton/SendButton";
import FormField from "../../molecules/FormField/FormField";
import PhotoField from "../../molecules/PhotoField/PhotoField";
import { Wrapper } from "./Form.style";

const initialValues = {
  name: "",
  describe: "",
  img: "",
};

const Form = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    console.log("asd");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormValues({
          type: "inputChange",
          name: "img",
          value: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Wrapper>
      <FormField
        placeholder="name"
        value={formValues.name}
        onChange={handleOnChange}
        name="name"
      />
      <FormField
        placeholder="describe"
        value={formValues.describe}
        onChange={handleOnChange}
        name="describe"
      />
      <PhotoField
        id="imageUpload"
        name="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImage}
        img={formValues.img}
      />
      <SendButton />
    </Wrapper>
  );
};

export default Form;
