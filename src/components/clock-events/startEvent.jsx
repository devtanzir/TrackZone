import React from "react";
import { useEventDateTime, useEventEndTime } from "./Hook/useEvent";

const StartEvent = ({ event }) => {
  const { DID, HOURS, MINUTE, SECOND } = useEventDateTime(event);
  const { E_DID, E_HOURS, E_MINUTE, E_SECOND } = useEventEndTime(event);
  let stE = DID > 0 || HOURS > 0 || MINUTE > 0 || SECOND > 0;
  let endE = E_DID > 0 || E_HOURS > 0 || E_MINUTE > 0 || E_SECOND > 0;
  return (
    <>
      {stE && (
        <p>
          Event will Start in {DID} : {HOURS} : {MINUTE} : {SECOND}
        </p>
      )}
      {!stE && endE && (
        <p>
          Event will End in {E_DID} : {E_HOURS} : {E_MINUTE} : {E_SECOND}
        </p>
      )}
      {!endE && <p>Event is Finished</p>}
    </>
  );
};

export default StartEvent;
