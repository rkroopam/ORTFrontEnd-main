import React from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    color: "black",
    fontSize: "1rem",
  },
  "& .MuiInputLabel-root": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "blue",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
}));

const MyCustomTextField = ({ label, helperText, ...props }: any) => {
  return (
    <CustomTextField
      label={label}
      helperText={helperText}
      variant="outlined"
      {...props}
    />
  );
};

export default MyCustomTextField;
