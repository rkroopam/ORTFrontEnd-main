import React from "react";
import { buttonClasses } from "@mui/base/Button";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const blue = {
  200: "#99CCFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0066CC",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledButton = styled(Button)(
  ({ theme, variant, backgroundColor, boxShadow }: any) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    margin-top: 0.3rem;
    line-height: 1.5;
    // background-color: ${
      backgroundColor || (variant === "contained" ? blue[500] : "transparent")
    };
    // color: ${
      variant === "contained" ? "white" : backgroundColor || blue[500]
    };
    // border: 1px solid ${backgroundColor || blue[500]};
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 150ms ease;
    // box-shadow: 0 2px 1px ${
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.5)"
        : "rgba(45, 45, 60, 0.2)"
    },
    //   inset 0 1.5px 1px ${boxShadow || grey[400]}, inset 0 -2px 1px ${
    boxShadow || grey[600]
  };
  
    // &:hover {
    //   background-color: ${
      backgroundColor || (variant === "contained" ? blue[600] : blue[200])
    };
    //   color: ${
      variant === "contained" ? "white" : backgroundColor || blue[600]
    };
    // }
  
    &.${buttonClasses.active} {
      // background-color: ${backgroundColor || blue[700]};
      // box-shadow: none;
      transform: scale(0.99);
    }
  
    &.${buttonClasses.focusVisible} {
      // box-shadow: 0 0 0 4px ${
        theme.palette.mode === "dark"
          ? backgroundColor || blue[300]
          : backgroundColor || blue[200]
      };
      // outline: none;
    }
  
    &.${buttonClasses.disabled} {
      // background-color: ${
        theme.palette.mode === "dark"
          ? backgroundColor || grey[700]
          : backgroundColor || grey[200]
      };
      // color: ${
        theme.palette.mode === "dark"
          ? backgroundColor || grey[200]
          : backgroundColor || grey[700]
      };
      border: 0;
      cursor: default;
      box-shadow: none;
      transform: scale(1);
    }
  `
);

const CustomButton = ({
  children,
  sx,
  onClick,
  fullWidth,
  color,
  variant,
  backgroundColor,
  boxShadow,
  ...props
}: any) => {
  return (
    <StyledButton
      variant={variant}
      fullWidth={fullWidth}
      onClick={onClick}
      backgroundColor={backgroundColor}
      boxShadow={boxShadow}
      color={color}
      sx={{ ...sx }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
