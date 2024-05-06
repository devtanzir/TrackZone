import Modal from "../shared/modal/modal";
import { EventButton } from "./event-style";
import useEventEdit from "./Hook/useEventEdit";

const EventEdit = ({ values, clockId, updateEvent }) => {
  const { state, handleState } = useEventEdit();
  return (
    <>
      <EventButton onClick={handleState}>Edit</EventButton>
      {state && (
        <Modal
          isEventForm
          handleModal={handleState}
          values={values}
          isEdit
          updateEvent={updateEvent}
          clockId={clockId}
        />
      )}
    </>
  );
};

export default EventEdit;
