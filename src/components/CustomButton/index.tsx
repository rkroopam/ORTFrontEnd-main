import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

interface CustomButtonProps extends ButtonProps {
  fullWidth?: boolean;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
  // Add any other props you need
}

const StyledButton = styled(Button)<CustomButtonProps>(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "auto",
  // You can add more custom styles here if needed
}));

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { fullWidth, variant, color, onClick, children, ...otherProps } = props;

  return (
    <StyledButton
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
