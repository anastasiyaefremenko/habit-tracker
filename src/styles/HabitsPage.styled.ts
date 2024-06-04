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
`;

export const HabitListContainer = styled.div`
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  top: 406px;
  height: 360px;
`;
