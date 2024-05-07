import { format } from "date-fns";
import { TextH3, TextH5, TextP } from "../../ui/text";
import { Wrapper } from "./clock-display-style";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHr = offset / 60;
  return (
    <Wrapper>
      <TextH3>{title}</TextH3>
      <TextH5>{format(date, "hh:mm:ss aaaaa'm'")}</TextH5>
      <TextP>
        {timezone}
        {(timezone === "GMT" || timezone === "UTC") &&
          (offsetHr > 0
            ? ` | +${Math.abs(offsetHr)}`
            : ` | -${Math.abs(offsetHr)}`)}
      </TextP>
    </Wrapper>
  );
};

export default ClockDisplay;
