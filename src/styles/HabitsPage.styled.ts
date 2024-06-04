import styled from "styled-components";

export const Root = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;
export const FixedPart = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white;
  z-index: 1;
  padding-bottom: 20px;
`;

export const HabitListContainer = styled.div`
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  top: 408px;
  height: 360px;
`;
