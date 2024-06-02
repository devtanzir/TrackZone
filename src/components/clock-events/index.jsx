import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";
import useCreateEvent from "./Hook/useCreateEvent";
import PropTypes from "prop-types";

const CreateEvent = ({ addClock, clockId }) => {
  const { handleEvent, handleModal, isCreate } = useCreateEvent(
    addClock,
    clockId
  );
  return (
    <>
      <Button onClick={handleModal}>Create Event</Button>
      {isCreate && (
        <Modal
          isEventForm
          createEvent
          handleEvent={handleEvent}
          handleModal={handleModal}
        />
      )}
    </>
  );
};
CreateEvent.propTypes = {
  addClock: PropTypes.func.isRequired,
  clockId: PropTypes.string.isRequired,
};
export default CreateEvent;
