import { useEffect, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useTheme } from "../theme-provider";

interface ColorPickerProps {
  onChange: (value: string) => void;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const { colors } = useTheme();
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    props.onChange(color);
  }, [color]);

  return <HexColorPicker color={color} onChange={setColor} />;
};
