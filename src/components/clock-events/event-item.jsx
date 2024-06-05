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
import { Skeleton } from "../shared/loader-skeleton/skeleton";

const EventItem = ({
  clock,
  clockId,
  loading,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const { handleState, state } = useEventEdit(); // to handle modal
  return (
    <>
      <Wrapper>
        {!clock.events ? (
          <ItemDiv>
            <Skeleton $width={"200px"} $height={"30px"} />
            <Skeleton $height={"10px"} />
            <Skeleton $height={"10px"} />
            <Skeleton $width={"300px"} />
            <ButtonWrapper>
              <Skeleton $width={"100px"} $height={"41px"} />
              <Skeleton $width={"100px"} $height={"41px"} />
            </ButtonWrapper>
          </ItemDiv>
        ) : clock.events.length === 0 ? ( // if there is no event
          <EventTitle>There is no Events</EventTitle>
        ) : (
          <>
            {clock.events.map((item) => {
              if (loading) {
                return (
                  <ItemDiv key={item._id}>
                    <Skeleton $width={"200px"} $height={"30px"} />
                    <Skeleton $height={"10px"} />
                    <Skeleton $height={"10px"} />
                    <Skeleton $width={"300px"} />
                    <ButtonWrapper>
                      <Skeleton $width={"100px"} $height={"41px"} />
                      <Skeleton $width={"100px"} $height={"41px"} />
                    </ButtonWrapper>
                  </ItemDiv>
                );
              }
              return (
                <ItemDiv key={item._id}>
                  <EventTitle>{item.title}</EventTitle>
                  <P>{item.des}</P>
                  <StartEvent event={item} />
                  <ButtonWrapper>
                    <EventEdit values={item} updateEvent={updateEvent} />
                    <EventDelete
                      deleteEvent={deleteEvent}
                      clockId={item.clockId}
                      id={item._id}
                    />
                  </ButtonWrapper>
                </ItemDiv>
              );
            })}
            {loading ? (
              <Skeleton $height={"30px"} />
            ) : (
              <EventButton onClick={handleState}>Delete All</EventButton>
            )}

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
  clock: PropTypes.shape({
    events: PropTypes.arrayOf(PropTypes.object),
    offset: PropTypes.number.isRequired,
    timezone: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  loading: PropTypes.bool.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
  clockId: PropTypes.string.isRequired,
};
export default EventItem;
