import { useState } from "react";
import { Container, Input, Label, FileButtonWrapper, HiddenFileInput, StyledButton } from "./styles";

interface IInputWithLabelProps {
    label: string,
    value?: string | number,
    required?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    width?: string,
    height?: string,
    type?: string,
    accept?: string,
    maxLength?: number,
}

const InputWithLabel: React.FC<IInputWithLabelProps> = ({
    label,
    value = '',
    required,
    onChange,
    width,
    height,
    type = 'text',
    accept,
    maxLength,
}) => {

    const [isFocused, setIsFocused] = useState(false);

    const handleButtonClick = (inputRef: HTMLInputElement | null) => {
        if (inputRef) {
            inputRef.click();
        }
    };

    return (
        <Container width={width} height={height}>
            <Label isFocused={isFocused || value !== ''}>
                {label}
            </Label>
            {type === 'file' ? (
                <FileButtonWrapper>
                    <HiddenFileInput
                        type={type}
                        onChange={onChange}
                        required={required}
                        accept={accept}
                        ref={(ref) => {
                            if (ref) ref.required = required || false;
                        }}                        
                    />
                    <StyledButton
                        onClick={() => handleButtonClick(document.querySelector(`input[type="file"]`))}
                        type="button"
                    >
                        Upload Arquivo
                    </StyledButton>
                </FileButtonWrapper>
            ) : (
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    required={required}
                    accept={accept}
                    maxLength={maxLength}
                />
            )}
        </Container>
    );
};

export default InputWithLabel;