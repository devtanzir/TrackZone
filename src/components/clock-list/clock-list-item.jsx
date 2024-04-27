import { formatDistance } from "date-fns";
import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({ clock, updateClock, deleteClock, localClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  if (!date) {
    return;
  }
  return (
    <>
      <ClockDisplay
        date={date}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <h3>{formatDistance(date, localClock)}</h3>
      <ClockActions
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </>
  );
};

export default ClockListItem;
