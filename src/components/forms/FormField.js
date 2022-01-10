import React from "react";
import { useFormikContext } from "formik";
import { AppText } from "./../AppText";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppText
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        value={values[name] == null ? "" : values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
