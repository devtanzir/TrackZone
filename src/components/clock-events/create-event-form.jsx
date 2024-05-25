import InputGroupContainer from "../shared/input-group/input-group";
import {
  InputWrapper,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
} from "../ui/AllFormItem";
import useEventForm from "./Hook/useEventForm";
import PropTypes from "prop-types";

const EventForm = ({
  values = { title: "", des: "", startDate: "", endDate: "" }, // initial value of form
  handleEvent,
  isEdit,
  handleModal,
  createEvent,
  updateEvent,
  clockId,
}) => {
  const {
    formState: state,
    handleBlur,
    handleChange,
    handleFocus,
    handleSubmit,
    cb,
  } = useEventForm(
    values,
    handleEvent,
    isEdit,
    handleModal,
    updateEvent,
    clockId
  );
  return (
    <ModalForm onSubmit={(e) => handleSubmit(e, cb)}>
      <ModalFormTitle>
        {createEvent ? "Create Event" : "Edit Event"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroupContainer
          label={"Enter Title"}
          name={"title"}
          type={"text"}
          value={state.title.value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={"Meeting With John"}
          error={state.title.error}
        />
        <InputGroupContainer
          isTextarea
          label={"Event Details"}
          name={"des"}
          value={state.des.value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={
            "John is my American Client. He needs a Web Application that will related to timezone"
          }
          error={state.des.error}
        />
        <InputGroupContainer
          label={"Event Start date"}
          name={"startDate"}
          type={"datetime-local"}
          value={state.startDate.value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={state.startDate.error}
        />
        <InputGroupContainer
          label={"Event End date"}
          name={"endDate"}
          type={"datetime-local"}
          value={state.endDate.value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={state.endDate.error}
        />
      </InputWrapper>
      <SubmitBtn type="submit">{isEdit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};
EventForm.propTypes = {
  values: PropTypes.shape({
    title: PropTypes.string,
    des: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
  handleEvent: PropTypes.func,
  isEdit: PropTypes.bool,
  handleModal: PropTypes.func,
  createEvent: PropTypes.bool,
  updateEvent: PropTypes.func,
  clockId: PropTypes.string,
};
export default EventForm;
