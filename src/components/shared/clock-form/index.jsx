import { getOffset, getTimeZone } from "../../../utils/timezone";
import {
  InputWrapper,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
} from "../../ui/button/AllFormItem";
import useClockForm from "./hook/useClockForm";
import InputGroupContainer from "../input-group/input-group";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
  handleModal,
  createForm = false,
}) => {
  const { formValues, handleChange, handleSubmit } = useClockForm(
    values,
    handleClock,
    handleModal
  );
  return (
    <ModalForm onSubmit={handleSubmit}>
      <ModalFormTitle>
        {createForm ? "Create a New Clock" : "Edit Clock"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroupContainer
          label={"Enter Title"}
          name={"title"}
          type={"text"}
          value={formValues.title}
          onChange={handleChange}
          disabled={!title}
          placeholder={"Universal Clock"}
        />
        <InputGroupContainer
          isSelect
          label={"Enter Timezone : "}
          name={"timezone"}
          value={formValues.timezone}
          onChange={handleChange}
          optionValue={getTimeZone}
        />
        {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
          <InputGroupContainer
            isSelect
            label={"Enter Offset : "}
            name={"offset"}
            value={formValues.offset / 60}
            onChange={handleChange}
            optionValue={getOffset}
          />
        )}
      </InputWrapper>
      <SubmitBtn>{edit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};

export default ClockForm;
