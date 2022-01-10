import React from 'react';
import {useFormikContext} from 'formik';
import { Appbtn } from './../Appbtn';

function SubmitButton({txt}) {

    const {handleSubmit} = useFormikContext();
    return (
      <Appbtn
        onPress={handleSubmit}
        txt={txt}
      />
    );
}

export default SubmitButton;