import React, { InputHTMLAttributes, useState } from "react";
import { ErrorMessage, useField } from "formik";
import { useDispatch } from "react-redux";

import "./textinput.css";

interface FormikInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "autoComplete"> {
  id: string;
  label: string;
  name: string;
  type?: string;
  isRequired?: boolean;
  autoComplete?: boolean;
  labelClassName?: string;
  hasError?: string;
}

const TextInput = ({
  id,
  placeholder,
  name,
  label,
  hasError,
}: FormikInputProps) => {
  const [field, meta, helpers] = useField(name);

  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleFocus = () => {
    helpers.setError("");
    setIsInputFocus(!isInputFocus);
  };

  const handleBlur = () => {
    setIsInputFocus(!isInputFocus);
  };

  const CustomError = () => {
    return (
      <div>
        <span>Erreur : </span>
        {meta.error}
      </div>
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="name">{label}</label>
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className="textinput"
        onFocus={handleFocus}
        {...field}
      />

      {name && <ErrorMessage name={name} component={CustomError} />}
      {hasError && <div aria-live="polite">{hasError}</div>}
    </div>
  );
};

export default TextInput;
