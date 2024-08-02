import { Box, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { verifyEmail } from "../../../api/services/user";
import { toast } from "react-toastify";
import { getUserDetails } from "../../../utils/updateCurrentUser";
import { useNavigate } from "react-router-dom";
import { CustomLoader } from "../../../common";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const verifyEmailMutation = useMutation({
    mutationFn: () => verifyEmail(),
    onSuccess: () => {
      toast.success("email verified");
      navigate("/auth/login");
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Email failed");
    },
  });

  useEffect(() => {
    const userData = getUserDetails();
    if (userData && userData.email) {
      verifyEmailMutation.mutateAsync(userData);
    }
  }, []);

  return (
    <Box style={{ padding: "24px" }}>
      <Typography variant="h5" align="center">
        Verifying Email
      </Typography>
      <CustomLoader />
    </Box>
  );
};

export default VerifyEmail;
