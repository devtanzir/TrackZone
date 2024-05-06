import { format } from "date-fns";
import {
  DateFormate,
  DateTimezone,
  Title,
  Wrapper,
} from "./clock-display-style";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHr = offset / 60;
  return (
    <Wrapper>
      <Title>{title}</Title>
      <DateFormate>{format(date, "hh:mm:ss aaaaa'm'")}</DateFormate>
      <DateTimezone>
        {timezone}
        {(timezone === "GMT" || timezone === "UTC") &&
          (offsetHr > 0
            ? ` | +${Math.abs(offsetHr)}`
            : ` | -${Math.abs(offsetHr)}`)}
      </DateTimezone>
    </Wrapper>
  );
};

export default ClockDisplay;
