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

const EventItem = ({
  getEventsByClockId,
  clockId,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const eventsById = getEventsByClockId(clockId);
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
                  <EventButton
                    onClick={() => deleteEvent(item.clockId, item.id)}
                  >
                    Delete
                  </EventButton>
                </ButtonWrapper>
              </ItemDiv>
            ))}
            <EventButton onClick={() => deleteAllEvent(clockId)}>
              Delete All
            </EventButton>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default EventItem;
