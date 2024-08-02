import React from "react";
import { Container, Typography, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PendingIcon from "@mui/icons-material/HourglassEmpty";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentStatus = () => {
  const getStatusContent = () => {
    switch (status) {
      case "success":
        return {
          title: "Payment Successful",
          message: "Your payment has been processed successfully. Thank you!",
          icon: <CheckCircleIcon color="success" fontSize="large" />,
        };
      case "pending":
        return {
          title: "Payment Pending",
          message:
            "Your payment is currently being processed. Please check back later.",
          icon: <PendingIcon color="warning" fontSize="large" />,
        };
      case "canceled":
        return {
          title: "Payment Canceled",
          message:
            "Your payment was canceled. If you have any questions, please contact us.",
          icon: <CancelIcon color="error" fontSize="large" />,
        };
      default:
        return {
          title: "Unknown Status",
          message: "The payment status is unknown. Please contact support.",
          icon: null,
        };
    }
  };

  const { title, message, icon } = getStatusContent();

  return (
    <Container maxWidth="sm">
      <Box mt={5} textAlign="center">
        {icon}
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{message}</Typography>
      </Box>
    </Container>
  );
};

export default PaymentStatus;
