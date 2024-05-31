import styled from "styled-components";
import { FaRegEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { PiEye } from "react-icons/pi";
import { PiEyeClosed } from "react-icons/pi";
import { HiOutlinePencil } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";

export const Root = styled.div`
  width: 100%;
  padding-inline: 28px;
`;
export const HabitItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  border-bottom: #ebeff5 solid 1px;
  height: 38px;
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
  margin-left: 12px;
  height: 26px;
  caret-color: #8f9db6;
  &:disabled {
    pointer-events: none;
  }
  &::placeholder {
    color: #9aa1a4;
  }
`;
export const EyeButton = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
`;
export const DotsButton = styled.button`
  border: none;
  background-color: transparent;
  width: 40px;
  font-size: 20px;
  font-weight: 900;
  color: #c1cbdb;
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
export const ColorInput = styled.input`
  width: 70px;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  outline: none;
  border: solid #f0f0f0;
  color: #666666;
  padding-left: 4px;
  height: 26px;
  caret-color: #8f9db6;
  &::placeholder {
    color: #9aa1a4;
  }
`;
export const ColorInputLabel = styled.label`
  background-color: #f0f0f0;
  text-align: center;
  padding-top: 2px;
  color: #9aa1a4;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  width: 22px;
  border: solid #f0f0f0;
  height: 26px;
`;
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledPenIcon = styled(HiOutlinePencil)`
  height: 22px;
  width: 22px;
  color: #c1cbdb;
`;
export const StyledTrashIcon = styled(IoTrashOutline)`
  color: #c1cbdb;
  height: 22px;
  width: 22px;
`;
export const StyledPenButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 40px;
  height: 26px;
  background-color: transparent;
`;
export const StyledTrashButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 40px;
  height: 26px;
  background-color: transparent;
`;
export const HabitButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NameAndColorContainer = styled.div<{ rename?: boolean }>`
  display: flex;
  align-items: center;
  height: 26px;
  width: 100%;
`;
