import { useState } from "react";
import { connect } from "react-redux";
import { addImage } from "../../../actions/imageActions";
import SendButton from "../../atoms/SendButton/SendButton";
import FormField from "../../molecules/FormField/FormField";
import PhotoField from "../../molecules/PhotoField/PhotoField";
import { Wrapper } from "./Form.style";
import FormTitle from "../../atoms/FormTitle/FormTitle";

const initialValues = {
  name: "",
  describe: "",
  img: "",
};
const initialValidation = {
  name: false,
  describe: false,
  img: false,
};

const Form = ({ addImage }) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formValidation, setFormValidation] = useState(initialValidation);

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormValues({
          ...formValues,
          img: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmit = () => {
    formValues.name
      ? setFormValidation((prevState) => ({ ...prevState, name: false }))
      : setFormValidation((prevState) => ({ ...prevState, name: true }));
    formValues.describe
      ? setFormValidation((prevState) => ({ ...prevState, describe: false }))
      : setFormValidation((prevState) => ({ ...prevState, describe: true }));
    formValues.img
      ? setFormValidation((prevState) => ({ ...prevState, img: false }))
      : setFormValidation((prevState) => ({ ...prevState, img: true }));

    console.log(formValidation);
    if (formValidation.name || formValidation.describe || formValidation.img) {
      return;
    } else {
      setFormValues(initialValues);
      addImage(formValues.name, formValues.describe, formValues.img);
    }
  };

  return (
    <Wrapper>
      <FormTitle title="Add photo" />
      <FormField
        placeholder="name"
        value={formValues.name}
        onChange={handleOnChange}
        name="name"
      />
      {formValidation.name && <p>This field is required</p>}
      <FormField
        placeholder="describe"
        value={formValues.describe}
        onChange={handleOnChange}
        name="describe"
      />
      {formValidation.describe && <p>This field is required</p>}
      <PhotoField
        id="imageUpload"
        name="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImage}
        img={formValues.img}
      />
      {formValidation.img && <p>Image is required</p>}
      <SendButton onSubmit={onSubmit} />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addImage: (name, describe, img) => dispatch(addImage(name, describe, img)),
});

export default connect(null, mapDispatchToProps)(Form);
