import { format } from "date-fns";
import styled from "styled-components";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHr = offset / 60;
  return (
    <Wrapper>
      <Title>Title: {title}</Title>
      <DateFormate>{format(date, "yyyy-MM-dd hh:mm:ss aaaaa'm'")}</DateFormate>
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

const Title = styled.h3`
  font-size: 30px;
  color: #2c2c54;
`;
const DateFormate = styled.h5`
  font-size: 24px;
  color: #2c2c54;
`;
const DateTimezone = styled.p`
  font-size: 20px;
  color: #2c2c54;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #dfe4ea;
  display: inline-block;
  padding: 15px;
  /* border: 2px solid #000; */
  border-radius: 7px;
  box-shadow: 20px 20px 20px -10px rgba(0, 0, 0, 0.15),
    inset 15px 15px 10px rgba(255, 255, 255, 0.5),
    -15px -15px 35px rgba(255, 255, 255, 0.35),
    inset -1px -1px 10px rgba(0, 0, 0, 0.2);
`;
