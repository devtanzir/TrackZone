import { format } from "date-fns";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHr = offset / 60;
  return (
    <div>
      <h3>Title: {title}</h3>
      <h5>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</h5>
      <p>
        {timezone}
        {(timezone === "GMT" || timezone === "UTC") &&
          (offsetHr > 0
            ? ` | +${Math.abs(offsetHr)}`
            : ` | -${Math.abs(offsetHr)}`)}
      </p>
    </div>
  );
};

export default ClockDisplay;
