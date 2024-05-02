import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
export const useEventDateTime = (event) => {
  const DID = differenceInDays(event.startDate, new Date());
  const DIH = differenceInHours(event.startDate, new Date());
  const DIM = differenceInMinutes(event.startDate, new Date());
  const DIS = differenceInSeconds(event.startDate, new Date());
  const HOURS = DIH - DID * 24;
  const MINUTE = DIM - DID * 24 * 60 - HOURS * 60;
  const SECOND = DIS - DID * 24 * 60 * 60 - HOURS * 60 * 60 - MINUTE * 60;
  let stE = DID > 0 || HOURS > 0 || MINUTE > 0 || SECOND > 0;
  return {
    DID,
    HOURS,
    MINUTE,
    SECOND,
    stE,
  };
};
export const useEventEndTime = (event) => {
  const DID = differenceInDays(event.endDate, new Date());
  const DIH = differenceInHours(event.endDate, new Date());
  const DIM = differenceInMinutes(event.endDate, new Date());
  const DIS = differenceInSeconds(event.endDate, new Date());
  const HOURS = DIH - DID * 24;
  const MINUTE = DIM - DID * 24 * 60 - HOURS * 60;
  const SECOND = DIS - DID * 24 * 60 * 60 - HOURS * 60 * 60 - MINUTE * 60;
  let endE = DID > 0 || HOURS > 0 || MINUTE > 0 || SECOND > 0;
  return {
    E_DID: DID,
    E_HOURS: HOURS,
    E_MINUTE: MINUTE,
    E_SECOND: SECOND,
    endE,
  };
};
