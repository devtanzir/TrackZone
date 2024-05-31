import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import useTimer from "../../hooks/useTimer";
import CreateEvent from "../clock-events";
import ShowEvents from "../clock-events/show-events";
import {
  ClockItemWrapper,
  ThreeBtn,
  TimeMng,
  Wrapper,
} from "./clock-list-style";
import PropTypes from "prop-types";

const ClockListItem = ({
  clock,
  updateClock,
  deleteClock,
  localClock,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);

  const timer = useTimer(date);

  if (!date || !timer) return;

  return (
    <Wrapper>
      <ClockDisplay
        date={timer}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <ClockItemWrapper>
        <TimeMng>{formatDistance(date, localClock)}</TimeMng>
        <ThreeBtn>
          <ClockActions
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
          <CreateEvent clockId={clock._id} addClock={addEvent} />
          <ShowEvents
            clock={clock}
            clockId={clock._id}
            deleteEvent={deleteEvent}
            updateEvent={updateEvent}
            deleteAllEvent={deleteAllEvent}
          />
        </ThreeBtn>
      </ClockItemWrapper>
    </Wrapper>
  );
};

ClockListItem.propTypes = {
  clock: PropTypes.shape({
    title: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
    id: PropTypes.string,
  }),
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
};
export default ClockListItem;
