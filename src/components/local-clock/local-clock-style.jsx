import styled from "styled-components";
import { ButtonWrapper } from "../shared/clock-actions/action-style";
import Button from "../ui/button/button";
import { Wrapper } from "../shared/clock-display/clock-display-style";

export const LocalClockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px 20px;
  margin: 30px 0;
  border-radius: 7px;
  border: 2px solid #050505;
  box-shadow: 20px 20px 20px -10px rgba(0, 0, 0, 0.15),
    inset 15px 15px 10px rgba(255, 255, 255, 0.5),
    -15px -15px 35px rgba(255, 255, 255, 0.35),
    inset -1px -1px 10px rgba(0, 0, 0, 0.2);
  ${Wrapper} {
    width: 70%;
  }
  ${ButtonWrapper} {
    width: 20%;
  }
  ${Button} {
    width: 100%;
  }
  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 575.98px) {
    flex-direction: column;
    align-items: flex-start;
    ${ButtonWrapper} {
      padding-left: 15px;
      width: 100%;
    }
    ${Button} {
      padding: 9px 12px;
      font-size: 12px;
    }
  }
  /* Extra small devices (phones, less than 576px) */
  @media (max-width: 767.98px) {
    ${ButtonWrapper} {
      width: 100%;
    }
    ${Button} {
    }
  }
`;
