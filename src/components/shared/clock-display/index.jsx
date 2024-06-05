import { format } from "date-fns";
import { TextH3, TextH5, TextP } from "../../ui/text";
import { Wrapper } from "./clock-display-style";
import PropTypes from "prop-types";
import { Skeleton } from "../loader-skeleton/skeleton";

const ClockDisplay = ({ date, title, timezone, offset, loading }) => {
  const offsetHr = offset / 60;

  if (loading) {
    return (
      <Wrapper>
        <Skeleton $width={"50%"} />
        <Skeleton $width={"40%"} />
        <Skeleton $width={"30%"} />
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <TextH3>{title}</TextH3>
      <TextH5>{format(date, "hh:mm:ss aaaaa'm'")}</TextH5>
      <TextP>
        {timezone}
        {(timezone === "GMT" || timezone === "UTC") &&
          (offsetHr >= 0
            ? ` | +${Math.abs(offsetHr)}`
            : ` | -${Math.abs(offsetHr)}`)}
      </TextP>
    </Wrapper>
  );
};

ClockDisplay.propTypes = {
  date: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  timezone: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ClockDisplay;
