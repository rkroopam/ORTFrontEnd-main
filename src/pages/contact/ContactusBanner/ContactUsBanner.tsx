import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const InnerBannerWrap = styled(Box)({
  position: "relative",
  height: "400px", // Adjust as needed
  backgroundImage: "url(assets/img/educator-img12.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const InnerBannerContent = styled(Box)({
  position: "absolute",
  bottom: "20px", // Adjust as needed
  left: "20px", // Adjust as needed
  color: "#fff",
});

const ContactUsBanner = () => {
  return (
    <InnerBannerWrap>
      <Container>
        <InnerBannerContent>
          <Typography variant="h1">Contact us</Typography>
        </InnerBannerContent>
      </Container>
    </InnerBannerWrap>
  );
};

export default ContactUsBanner;
