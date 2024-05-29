/** @format */

import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const InputCustomMultiLine = ({
  placeholder = "",
  value = "",
  label = "",
  disabled = false,
  readOnly = false,
  type = "text",
  onBlur = () => {},
  onChange = () => {},
  customClassName = "",
  customClassWrap = "",
  customClassLabel = "",
  onFocus = () => {},
  onKeyPress = () => {},
  onPaste = () => {},
  variant = "outline",
  isShowIcon = false,
  id = "",
  customClass = "",
  innerRef = null,
  pattern = "",
  inputMode = "",
  maxLength = "",
  autocomplete = "off",
  autoFocus,
  iconEmail = false,
  iconPrice = false,
  iconOccupation = false,
  onKeyDown = () => {},
  iconCheckPhone = false,
  iconLocation = "",
  rows = "",
  onKeyUp = () => {},
}: Props) => {
  return (
    <div
      className={`input input-group w-100 ${
        variant !== "outline" ? ` input__wrapper--${variant}` : ""
      }`}
    >
      <div
        className={`input__box ${customClassWrap} ${
          isShowIcon ? "input__box__custom" : ""
        }`}
      >
        {iconLocation && (
          <div className="icon">
            <img src={iconLocation} alt="" className="iconEmail imgLocation" />
          </div>
        )}
        <TextareaAutosize
          className={`input-change ${
            customClass.length > 0 ? customClass : ""
          } ${
            variant !== "outline" ? `input--${variant}` : ""
          } ${customClassName} ${value ? "value" : ""}`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          type={type}
          ref={innerRef}
          onPaste={onPaste}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          onBlur={(e) => onBlur(e)}
          onFocus={(e) => onFocus(e)}
          onChange={(e) => onChange(e)}
          autoCapitalize="none"
          inputMode={inputMode}
          maxLength={maxLength}
          id={id}
          pattern={pattern}
          autoComplete={autocomplete}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          rows={rows}
        />
      </div>
    </div>
  );
};

export default InputCustomMultiLine;
