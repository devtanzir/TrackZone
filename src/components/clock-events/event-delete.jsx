import Confirm from "../shared/confirm-modal/confirm-modal";
import useEventEdit from "./Hook/useEventEdit";
import { EventButton } from "./event-style";
import PropTypes from "prop-types";

const EventDelete = ({ deleteEvent, clockId, id }) => {
  const { handleState, state } = useEventEdit();
  return (
    <>
      <EventButton onClick={handleState}>Delete</EventButton>
      {state && (
        <Confirm
          deleteEvent={deleteEvent}
          handleState={handleState}
          clockId={clockId}
          id={id}
        />
      )}
    </>
  );
};
EventDelete.propTypes = {
  deleteEvent: PropTypes.func,
  clockId: PropTypes.string,
  id: PropTypes.string,
};

export default EventDelete;
