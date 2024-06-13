import { getOffset, getTimeZone } from "../../../utils/timezone";
import {
  InputWrapper,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
} from "../../ui/AllFormItem";
import useClockForm from "./hook/useClockForm";
import InputGroupContainer from "../input-group/input-group";
import PropTypes from "prop-types";

const ClockForm = ({
  values = { title: "", timezone: "UTC", offset: 0 },
  handleClock,
  title = true,
  edit = false,
  handleModal,
  createForm = false,
}) => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    cb,
    offset,
    timezone,
  } = useClockForm(values, handleClock, handleModal, getOffset, getTimeZone);
  return (
    <ModalForm onSubmit={(e) => handleSubmit(e, cb)}>
      <ModalFormTitle>
        {createForm ? "Create a New Clock" : "Edit Clock"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroupContainer
          label={"Enter Title"}
          name={"title"}
          type={"text"}
          value={state.title.value}
          onChange={handleChange}
          disabled={!title}
          placeholder={"Universal Clock"}
          onBlur={handleBlur}
          onFocus={handleFocus}
          error={state.title.error}
        />
        <InputGroupContainer
          isSelect
          label={"Enter Timezone : "}
          name={"timezone"}
          value={state.timezone.value}
          onChange={handleChange}
          optionValue={timezone}
        />
        {(state.timezone.value === "GMT" || state.timezone.value === "UTC") && (
          <InputGroupContainer
            isSelect
            label={"Enter Offset : "}
            name={"offset"}
            value={state.offset.value / 60}
            onChange={handleChange}
            optionValue={offset}
          />
        )}
      </InputWrapper>
      <SubmitBtn>{edit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};
ClockForm.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    offset: PropTypes.number,
  }),
  handleClock: PropTypes.func,
  handleModal: PropTypes.func,
  title: PropTypes.bool,
  edit: PropTypes.bool,
  createForm: PropTypes.bool,
};
export default ClockForm;
