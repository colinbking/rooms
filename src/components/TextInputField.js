import React from 'react';
import { useField } from 'formik';
import { TextField, Typography } from '@material-ui/core';

/* Used with Formik as a text input field (eg: username) */
const TextInputField = ({ ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and also replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        {/* Component */}
        <TextField
            {...field}
            {...props}
        />
        {/* Error message */}
        {meta.touched && meta.error ? (
          <div className="error"><Typography color="error">{meta.error}</Typography></div>
        ) : null}
      </>
    );
};

export default TextInputField;