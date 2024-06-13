import {
  Error,
  Input,
  InputGroup,
  Label,
  Option,
  Select,
  TextArea,
} from "../../ui/AllFormItem";
import { generateId } from "../../../utils/Id_Generator/GenerateId";

const InputGroupContainer = ({
  label,
  name,
  type,
  value,
  onChange,
  disabled,
  isSelect = false,
  isTextarea = false,
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

      {isTextarea && (
        <TextArea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onInput}
          $error={error}
        />
      )}
      {isSelect && (
        <Select onChange={onChange} name={name} id={name} value={value}>
          {optionValue?.map((timezone) => {
            return (
              <Option key={generateId()} value={timezone}>
                {timezone}
              </Option>
            );
          })}
        </Select>
      )}
      {!isSelect && !isTextarea && (
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
          $error={error}
        />
      )}

      {error && <Error>{error}</Error>}
    </InputGroup>
  );
};

export default InputGroupContainer;
