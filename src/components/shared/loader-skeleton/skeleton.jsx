import styled from "styled-components";

export const Skeleton = styled.div`
  width: ${(props) => props.$width || "100%"};
  border-radius: 0.5rem;
  background-color: #d1d5db;
  height: ${(props) => props.$height || "1.25rem"};
  animation: pulse 2s infinite;
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
