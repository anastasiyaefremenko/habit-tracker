import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";

export const Root = styled.div`
  width: 100%;
  padding-inline: 26px;
`;
export const HabitItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  margin-bottom: 6px;
  border-bottom: #ebeff5 solid 1px;
`;

export const HabitColor = styled.button<{
  show?: boolean;
  customColor?: string;
}>`
  background-color: ${(props) => (props.show ? props.customColor : "#C1CBDB")};
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 50%;
`;
export const HabitName = styled.input<{ show?: boolean }>`
  color: ${(props) => (props.show ? "#2b2b2b;" : "#C1CBDB")};
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 38px;
  margin-left: 20px;
  &:disabled {
    //color: #2b2b2b;
    pointer-events: none;
  }
`;
export const EyeButton = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
`;
export const EyeIcon = styled(PiEye)`
  width: 18px;
  height: 18px;
  color: #c1cbdb;
`;
export const ClosedEyeIcon = styled(PiEyeClosed)`
  width: 18px;
  height: 18px;
  color: #c1cbdb;
`;
