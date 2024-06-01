import styled from "styled-components";

export const Root = styled.div`
  height: 100vh;
`;
export const FixedPart = styled.div`
  overflow-y: hidden;
  z-index: 500;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
`;

export const HabitListContainer = styled.div`
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  bottom: -80px;
  z-index: 0;
  min-height: 60vh;
  max-height: 75vh;
`;
