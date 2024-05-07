import InputGroupContainer from "../shared/input-group/input-group";
import {
  InputWrapper,
  ModalForm,
  ModalFormTitle,
  SubmitBtn,
} from "../ui/AllFormItem";
import useEventForm from "./Hook/useEventForm";

const EventForm = ({
  values = { title: "", des: "", startDate: "", endDate: "" },
  handleEvent,
  isEdit,
  handleModal,
  createEvent,
  updateEvent,
  clockId,
}) => {
  const { events, handleChange, handleSubmit } = useEventForm(
    values,
    handleEvent,
    isEdit,
    handleModal,
    updateEvent,
    clockId
  );
  return (
    <ModalForm onSubmit={handleSubmit}>
      <ModalFormTitle>
        {createEvent ? "Create Event" : "Edit Event"}
      </ModalFormTitle>
      <InputWrapper>
        <InputGroupContainer
          label={"Enter Title"}
          name={"title"}
          type={"text"}
          value={events.title}
          onChange={handleChange}
          placeholder={"Meeting With John"}
        />
        <InputGroupContainer
          isTextarea
          label={"Event Details"}
          name={"des"}
          value={events.des}
          onChange={handleChange}
          placeholder={
            "John is my American Client. He needs a Web Application that will related to timezone"
          }
        />
        <InputGroupContainer
          label={"Event Start date"}
          name={"startDate"}
          type={"datetime-local"}
          value={events.startDate}
          onChange={handleChange}
        />
        <InputGroupContainer
          label={"Event End date"}
          name={"endDate"}
          type={"datetime-local"}
          value={events.endDate}
          onChange={handleChange}
        />
      </InputWrapper>
      <SubmitBtn type="submit">{isEdit ? "Update" : "Create"}</SubmitBtn>
    </ModalForm>
  );
};

export default EventForm;
