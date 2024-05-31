import StartEvent from "./startEvent";
import EventEdit from "./event-edit";
import {
  ButtonWrapper,
  EventButton,
  EventTitle,
  ItemDiv,
  P,
  Wrapper,
} from "./event-style";
import useEventEdit from "./Hook/useEventEdit";
import Confirm from "../shared/confirm-modal/confirm-modal";
import EventDelete from "./event-delete";
import PropTypes from "prop-types";

const EventItem = ({
  clock,
  getEventsByClockId,
  clockId,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const eventsById = getEventsByClockId(clockId); // get all events with targeted clock
  const { handleState, state } = useEventEdit(); // to handle modal
  return (
    <>
      <Wrapper>
        {clock.events.length === 0 ? ( // if there is no event
          <EventTitle>There is no Events</EventTitle>
        ) : (
          <>
            {clock.events.map((item) => (
              <ItemDiv key={item._id}>
                <EventTitle>{item.title}</EventTitle>
                <P>{item.des}</P>
                <StartEvent event={item} />
                <ButtonWrapper>
                  <EventEdit
                    clockId={clockId}
                    values={item}
                    updateEvent={updateEvent}
                  />
                  <EventDelete
                    deleteEvent={deleteEvent}
                    clockId={item.clockId}
                    id={item.id}
                  />
                </ButtonWrapper>
              </ItemDiv>
            ))}
            <EventButton onClick={handleState}>Delete All</EventButton>
            {state && (
              <Confirm
                deleteClock={deleteAllEvent}
                clockId={clockId}
                handleState={handleState}
              />
            )}
          </>
        )}
      </Wrapper>
    </>
  );
};
EventItem.propTypes = {
  getEventsByClockId: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
  clockId: PropTypes.string.isRequired,
};
export default EventItem;
