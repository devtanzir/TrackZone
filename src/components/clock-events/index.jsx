import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";
import useCreateEvent from "./Hook/useCreateEvent";

const CreateEvent = ({ addClock, clockId }) => {
  const { handleEvent, handleModal, isCreate } = useCreateEvent(
    addClock,
    clockId
  );
  return (
    <div>
      <Button onClick={handleModal}>Create Event</Button>
      {isCreate && (
        <Modal
          isEventForm
          createEvent
          handleEvent={handleEvent}
          handleModal={handleModal}
        />
      )}
    </div>
  );
};

export default CreateEvent;
