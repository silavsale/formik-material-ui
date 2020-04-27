import React from "react";
import { ErrorMessage, Field } from "formik";
import TextField from "@material-ui/core/TextField";

import "./FormikField.css";

interface FormikFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<FormikFieldProps> = ({
  label,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <div className="FormikField">
      <Field
        required={required}
        autoComplete="off"
        name={name}
        as={TextField}
        label={label}
        fullWidth
        type={type}
        helperText={<ErrorMessage name="name" />}
      />
    </div>
  );
};

export default FormikField;
