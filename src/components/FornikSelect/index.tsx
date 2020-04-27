import React, { ReactNode } from "react";
import { Field, ErrorMessage, FieldInputProps } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./FormikSelect.css";

export interface FormikSelectItem {
  label: string;
  value: string;
}

interface FormikSelectProps {
  name: string;
  items: FormikSelectItem[];
  label: string;
  required?: boolean;
}

interface MaterialUiSelectFieldProps extends FieldInputProps<string> {
  errorString?: string;
  children: ReactNode;
  label: string;
  required: boolean;
}

const MaterialUiSelectField: React.FC<MaterialUiSelectFieldProps> = ({
  label,
  children,
  errorString,
  value,
  name,
  onChange,
  onBlur,
  required,
}) => {
  return (
    <FormControl required fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </Select>
      <FormHelperText>{errorString}</FormHelperText>
    </FormControl>
  );
};

const FormikSelect: React.FC<FormikSelectProps> = ({
  name,
  label,
  items,
  required = false,
}) => {
  return (
    <div className="FormikSelect">
      <Field
        name={name}
        as={MaterialUiSelectField}
        label={label}
        errorString={<ErrorMessage name={name} />}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Field>
    </div>
  );
};

export default FormikSelect;
