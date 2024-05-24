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
  getEventsByClockId,
  clockId,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const eventsById = getEventsByClockId(clockId);
  const { handleState, state } = useEventEdit();
  return (
    <>
      <Wrapper>
        {eventsById.length === 0 ? (
          <EventTitle>There is no Events</EventTitle>
        ) : (
          <>
            {eventsById.map((item) => (
              <ItemDiv key={item.id}>
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
