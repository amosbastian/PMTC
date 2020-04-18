import React from "react";
import { useField, FieldHookConfig } from "formik";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

type FormikCheckboxProps = { label: string } & FieldHookConfig<{}>;

const FormikCheckbox: React.FC<FormikCheckboxProps> = ({ label, ...rest }) => {
  const [field] = useField(rest);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} labelPlacement="top" />;
};

export default FormikCheckbox;
