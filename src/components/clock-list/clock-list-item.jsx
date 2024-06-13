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
import { Skeleton } from "../shared/loader-skeleton/skeleton";

const ClockListItem = ({
  clock,
  updateClock,
  loading,
  deleteClock,
  localClock,
  addEvent,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const { date } = useClock(clock.timezone, clock.offset);
  console.log("called again", Math.random());

  const timer = useTimer(date);

  if (!date || !timer) return;

  return (
    <Wrapper>
      <ClockDisplay
        date={timer}
        loading={loading}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <ClockItemWrapper>
        <TimeMng>
          {loading ? <Skeleton /> : formatDistance(date, localClock)}
        </TimeMng>
        <ThreeBtn>
          <ClockActions
            clock={clock}
            loading={loading}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
          {loading ? (
            <Skeleton $height={"41px"} $width={"100%"} />
          ) : (
            <CreateEvent clockId={clock._id} addClock={addEvent} />
          )}

          {loading ? (
            <Skeleton $height={"41px"} $width={"100%"} />
          ) : (
            <ShowEvents
              clock={clock}
              loading={loading}
              clockId={clock._id}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              deleteAllEvent={deleteAllEvent}
            />
          )}
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
  loading: PropTypes.bool.isRequired,
  localClock: PropTypes.object,
  updateClock: PropTypes.func.isRequired,
  deleteClock: PropTypes.func.isRequired,
  addEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteAllEvent: PropTypes.func.isRequired,
};
export default ClockListItem;
