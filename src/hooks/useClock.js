import { useEffect, useState } from "react";
import { addMinutes } from "date-fns";
import { TIMEZONE_OFFSET } from "../constants/timezone";

/**
 * clock create hook
 * @param {String} timezone
 * @param {Number} offset
 * @returns a clock
 */
const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZone, setLocalTimeZone] = useState("");
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();
    // get current date and offset
    const lo = d.getTimezoneOffset();
    // call add minute function
    d = addMinutes(d, lo);
    setUtc(d);
    setLocalOffset(lo);
  }, [1000]);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        // pass the timezone and offset and create the clock
        const NewUtc = addMinutes(utc, offset);
        setLocalDate(NewUtc);
      } else {
        // if the clock is a local clock
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
