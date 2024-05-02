import React from "react";
import { useEventDateTime, useEventEndTime } from "./Hook/useEvent";
import styled from "styled-components";
const StartEvent = ({ event }) => {
  const { DID, HOURS, MINUTE, SECOND, stE } = useEventDateTime(event);
  const { E_DID, E_HOURS, E_MINUTE, E_SECOND, endE } = useEventEndTime(event);
  return (
    <>
      {stE && (
        <Start>
          Event will Start in {DID}d : {HOURS}h : {MINUTE}m :{" "}
          {SECOND >= 10 ? SECOND : `0${SECOND}`}s
        </Start>
      )}
      {!stE && endE && (
        <End>
          Event will End in {E_DID}d : {E_HOURS}h : {E_MINUTE}m :{" "}
          {E_SECOND >= 10 ? E_SECOND : `0${E_SECOND}`}s
        </End>
      )}
      {!endE && <Finish>Event is Finished</Finish>}
    </>
  );
};

export default StartEvent;

const Finish = styled.p`
  margin-bottom: 5px;
  color: #78e08f;
`;
const End = styled.p`
  margin-bottom: 5px;
  color: #eb2f06;
`;
const Start = styled.p`
  margin-bottom: 5px;
  color: #f6b93b;
`;
