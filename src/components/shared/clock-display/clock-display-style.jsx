import styled from "styled-components";
import { TextH3, TextH5, TextP } from "../../ui/text";

export const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  @media (max-width: 575.98px) {
    ${TextH3} {
      font-size: 25px;
    }
    ${TextH5} {
      font-size: 20px;
    }
    ${TextP} {
      font-size: 16px;
    }
  }
`;
