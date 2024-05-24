import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";
import useEventEdit from "./Hook/useEventEdit";
import PropTypes from "prop-types";

const ShowEvents = ({
  getEventsByClockId,
  updateEvent,
  clockId,
  deleteEvent,
  deleteAllEvent,
}) => {
  const { state, handleState } = useEventEdit();

  return (
    <>
      <Button onClick={handleState}>Show Event</Button>
      {state && (
        <Modal
          handleShow={handleState}
          showEvent
          getEventsByClockId={getEventsByClockId}
          clockId={clockId}
          deleteEvent={deleteEvent}
          updateEvent={updateEvent}
          deleteAllEvent={deleteAllEvent}
        />
      )}
    </>
  );
};

ShowEvents.propTypes = {
  id: PropTypes.string,
  getEventsByClockId: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
};
export default ShowEvents;
