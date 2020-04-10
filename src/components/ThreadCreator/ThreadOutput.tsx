import React from "react";
import { useFormikContext } from "formik";

const ThreadOutput: React.FC = () => {
  const { values } = useFormikContext();
  return <pre>{JSON.stringify(values, null, 2)}</pre>;
};

export default ThreadOutput;
