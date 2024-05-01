import React from "react";
import Button from "../ui/button/button";
import StartEvent from "./startEvent";
import styled from "styled-components";

const EventItem = ({ getEventsByClockId, clockId }) => {
  const eventsById = getEventsByClockId(clockId);
  return (
    <>
      <Wrapper>
        {eventsById.length === 0 ? (
          <h3>There is no Events</h3>
        ) : (
          eventsById.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.des}</p>
              <StartEvent event={item} />
              <Button>Edit</Button>
              <Button>Delete</Button>
            </div>
          ))
        )}
      </Wrapper>
    </>
  );
};

export default EventItem;

const Wrapper = styled.div`
  padding: 30px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-height: 600px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;
