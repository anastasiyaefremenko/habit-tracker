import styled from "styled-components";
import { themeColorTertiary } from "../../styles/themeColors";

export const StyledEditButton = styled.button<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorTertiary)};
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #8f9db6;
  border: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
`;
