import Button from "../ui/button/button";
import Modal from "../shared/modal/modal";
import useEventEdit from "./Hook/useEventEdit";
import PropTypes from "prop-types";

const ShowEvents = ({
  clock,
  updateEvent,
  loading,
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
          clock={clock}
          loading={loading}
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
  clock: PropTypes.shape({
    events: PropTypes.array,
    offset: PropTypes.number.isRequired,
    timezone: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  clockId: PropTypes.string,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
};
export default ShowEvents;
