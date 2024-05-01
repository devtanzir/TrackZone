import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIMEZONE_OFFSET } from "../constants/timezone";

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZone, setLocalTimeZone] = useState("");
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUtc(d);
    setLocalOffset(lo);
  }, [1000]);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        const NewUtc = addMinutes(utc, offset);
        setLocalDate(NewUtc);
      } else {
        const NewUtc = addMinutes(utc, -localOffset);
        const dateStrArr = NewUtc.toUTCString().split(" ");
        setLocalDate(NewUtc);
        setLocalTimeZone(dateStrArr.pop());
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    dateUTC: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimeZone,
  };
};

export default useClock;
