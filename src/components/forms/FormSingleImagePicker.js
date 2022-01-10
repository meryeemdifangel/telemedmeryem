import React from 'react';
import { useFormikContext } from "formik";

import ErrorMessage from './ErrorMessage';
import ImageInput from '../ImageInput';

function FormSingleImagePicker({name}) {
    const { errors, setFieldValue, touched, values } = useFormikContext();

    const imageUri = values[name];

    const onChangeImage = uri => {
        setFieldValue(name,uri);
      }
  

    return (
        <>
  
        <ImageInput 
             imageUri={imageUri}
             onChangeImage={onChangeImage}
        />
       <ErrorMessage error={errors[name]} visible={touched[name]} />
       </>
    );
}

export default FormSingleImagePicker;