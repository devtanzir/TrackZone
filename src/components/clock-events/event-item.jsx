import React, { useState } from "react";
import StartEvent from "./startEvent";
import styled from "styled-components";
import EventEdit from "./event-edit";

const EventItem = ({
  getEventsByClockId,
  clockId,
  deleteEvent,
  updateEvent,
}) => {
  const eventsById = getEventsByClockId(clockId);
  return (
    <>
      <Wrapper>
        {eventsById.length === 0 ? (
          <EventTitle>There is no Events</EventTitle>
        ) : (
          eventsById.map((item) => (
            <ItemDiv key={item.id}>
              <EventTitle>{item.title}</EventTitle>
              <P>{item.des}</P>
              <StartEvent event={item} />
              <ButtonWrapper>
                <EventEdit
                  clockId={clockId}
                  values={item}
                  updateEvent={updateEvent}
                />
                <EventButton onClick={() => deleteEvent(item.clockId, item.id)}>
                  Delete
                </EventButton>
              </ButtonWrapper>
            </ItemDiv>
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
const EventTitle = styled.h3`
  font-size: 26px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;
const ItemDiv = styled.div`
  background: #f7f7f7;
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f2f6;
  }
`;
const P = styled.p`
  font-size: 15px;
  margin-bottom: 5px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  color: #888585;
`;
const EventButton = styled.button`
  color: #fff;
  padding: 6px 10px;
  font-size: 13px;
  font-weight: 400;
  background-color: rgb(28, 34, 43);
  border-radius: 5px;
  border: none;
  outline: none;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background: transparent;
    border: 2px solid black;
    color: black;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
