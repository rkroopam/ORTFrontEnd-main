import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const CustomDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const CustomDialogActions = styled(DialogActions)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));

const CustomDialog = ({ open, onClose, title, children, onConfirm }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <CustomDialogTitle>{title}</CustomDialogTitle>
      <CustomDialogContent>{children}</CustomDialogContent>
      <CustomDialogActions>
        <CustomButton onClick={onClose}>Cancel</CustomButton>
        <CustomButton onClick={onConfirm}>Confirm</CustomButton>
      </CustomDialogActions>
    </Dialog>
  );
};

export default CustomDialog;
