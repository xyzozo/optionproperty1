/** @format */

import React from "react";
import Cleave from "cleave.js/react";
import { InputGroup } from 'react-bootstrap';

const InputNumber = ({
  placeholder = "",
  value = "",
  disabled = false,
  readOnly = false,
  type = "text",
  onBlur = () => {},
  onChange = () => {},
  customClassName = "",
  customClassWrap = "",
  onFocus = () => {},
  onKeyPress = () => {},
  onPaste = () => {},
  variant = "outline",
  id = "",
  customClass = "",
  innerRef = null,
  pattern = "",
  inputMode = "",
  maxLength = "",
  autocomplete = "off",
  autoFocus,
  options,
  prefix
}: Props) => {

  return (
    <div
      className={`input-group w-100 input ${
        variant !== "outline" ? ` input__wrapper--${variant}` : ""
      }`}
    >
      <div
        className={`input__box w-100 ${customClassWrap} ${
          prefix ? 'with-pre' : ''
        }`}
      >
        {prefix && (
                <InputGroup.Prepend>
                    <InputGroup.Text>{prefix}</InputGroup.Text>
                </InputGroup.Prepend>
            )}

        <Cleave
          placeholder={placeholder}
          options={options}
          type={type}
          inputMode={inputMode}
          value={value}
          disabled={disabled}
          className={`form-control ${
            customClass.length > 0 ? customClass : ""
          } ${
            variant !== "outline" ? `input--${variant}` : ""
          } ${customClassName} ${value ? "value" : ""}`}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          name={id}
          id={id}
          maxLength={maxLength}
          pattern={pattern}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
};

export default InputNumber;
