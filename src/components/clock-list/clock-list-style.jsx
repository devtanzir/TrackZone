import styled from "styled-components";
import Button from "../ui/button/button";
import { ButtonWrapper } from "../shared/clock-actions/action-style";

export const Wrapper = styled.div`
  display: inline-block;
  padding: 15px;
  border-radius: 7px;
  box-shadow: 20px 20px 20px -10px rgba(0, 0, 0, 0.15),
    inset 15px 15px 10px rgba(255, 255, 255, 0.5),
    -15px -15px 35px rgba(255, 255, 255, 0.35),
    inset -1px -1px 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 767.98px) {
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    flex: 1 1 auto;
  }
`;
export const ClockItemWrapper = styled.div`
  padding: 15px;
  padding-top: 0;
`;
export const ThreeBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 575.98px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
    ${Button} {
      padding: 9px 12px;
      font-size: 12px;
      width: 100%;
    }
    ${ButtonWrapper} {
      margin: 0;
      gap: 5px;
      width: 100%;
    }
  }
  @media (min-width: 576px) and (max-width: 991.98px) {
    gap: 5px;
    margin-top: 10px;
    ${Button} {
      width: 50%;
    }
    ${ButtonWrapper} {
      margin: 0;
      gap: 5px;
      width: 100%;
    }
  }
  @media (min-width: 992px) and (max-width: 1399.98px) {
    gap: 5px;
    margin-top: 10px;
    ${Button} {
      width: 60%;
    }
    ${ButtonWrapper} {
      margin: 0;
      gap: 5px;
      width: 80%;
    }
  }
  @media (min-width: 1400px) {
    gap: 5px;
    margin-top: 10px;
    ${Button} {
      width: 60%;
    }
    ${ButtonWrapper} {
      margin: 0;
      gap: 5px;
      width: 80%;
    }
  }
  /* @media (min-width: 1881px) {
    gap: 2px;
    margin-top: 10px;
    ${Button} {
      width: 100%;
    }
    ${ButtonWrapper} {
      margin: 0;
      gap: 2px;
      width: 50%;
    }
  } */
`;
export const TimeMng = styled.h3`
  text-align: center;
  text-transform: capitalize;
  font-size: 20px;
`;

export const ClockListWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;
export const H4 = styled.h4`
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
`;
