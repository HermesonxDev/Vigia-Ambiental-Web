import { useState } from "react";
import { Container, Label, Textarea } from "./style";

interface ITextareaWithLabelProps {
  label: string;
  value?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
  height?: string;
  maxLength?: number;
}

const TextareaWithLabel: React.FC<ITextareaWithLabelProps> = ({
  label,
  value = '',
  required,
  onChange,
  width,
  height,
  maxLength
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container width={width} height={height}>
      <Label isFocused={isFocused || value !== ''}>
        {label}
      </Label>
      <Textarea
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        maxLength={maxLength}
      />
    </Container>
  );
};

export default TextareaWithLabel;