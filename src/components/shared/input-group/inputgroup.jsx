import React from "react";
import {
  Error,
  Input,
  InputGroup,
  Label,
  Option,
  Select,
} from "../../ui/button/AllFormItem";
import { generateId } from "../../../utils/Id_Generator/GenerateId";

const InputGroupContainer = ({
  label,
  name,
  type,
  value,
  onChange,
  disabled,
  isSelect = false,
  placeholder,
  onFocus,
  onBlur,
  onInput,
  error,
  optionValue,
}) => {
  return (
    <InputGroup>
      {isSelect ? (
        <label htmlFor={name}>{label}</label>
      ) : (
        <Label htmlFor={name}>{label}</Label>
      )}
      {isSelect ? (
        <Select onChange={onChange} name={name} id={name} value={value}>
          {optionValue().map((timezone) => {
            return (
              <Option key={generateId()} value={timezone}>
                {timezone}
              </Option>
            );
          })}
        </Select>
      ) : (
        <Input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          error={error}
        />
      )}

      {error && <Error>{error}</Error>}
    </InputGroup>
  );
};

export default InputGroupContainer;
