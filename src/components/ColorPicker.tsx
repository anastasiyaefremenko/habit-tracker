import React, { useState } from "react";
import { SketchPicker } from "react-color";
import styled from "styled-components";
import { Classes } from "reactcss";
import { SketchPickerStylesProps } from "react-color/lib/components/sketch/Sketch";

export const Root = styled.div`
  padding-inline: 28px;
  display: flex;
  justify-content: center;
`;

const ColorPicker = (props: any) => {
  const styles: Partial<Classes<SketchPickerStylesProps>> = {
    default: {
      picker: {
        boxShadow: "none",
        width: "100%",
        padding: "none",
      },
      saturation: {
        boxShadow: "none",
        borderRadius: "12px",
        marginBottom: "12px",
      },
      activeColor: {
        boxShadow: "none",
        //borderRadius: "0px",
      },
    },
  };
  return (
    <Root>
      <SketchPicker
        color={props.color}
        onChange={(newColor) => props.setColor(newColor.hex)}
        disableAlpha={true}
        presetColors={[
          "#676973",
          "#BCD1F0",
          "#A3B1CB",
          "#E098CC",
          "#C1CBDB",
          "#D4BFBE",
          "#BEA29A",
          "#C3B0A3",
          "#B3A29D",
          "#8080A7",
          "#E1BEE7",
        ]}
        styles={styles}
      />
    </Root>
  );
};

export default ColorPicker;
