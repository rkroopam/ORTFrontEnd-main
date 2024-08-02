import React from "react";
import { Container, Grid, Typography, Link, Box, Avatar } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import XIcon from "@mui/icons-material/X";
import { pink } from "@mui/material/colors";

const Footer = () => {
  const socialMedia = [
    { title: "whatsapp", url: "" },
    { title: "facebook", url: "" },
    { title: "twitter", url: "" },
    { title: "youtube", url: "" },
  ];
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#41246D", py: 6, color: "white" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h4" gutterBottom>
              ORT
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 1,
                padding: 1,
              }}
            >
              {socialMedia.map((social, index) => (
                <Avatar
                  key={index}
                  sx={{
                    bgcolor: pink[500],
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  {social.title === "facebook" && (
                    <FacebookIcon fontSize="small" />
                  )}
                  {social.title === "whatsapp" && (
                    <WhatsAppIcon fontSize="small" />
                  )}
                  {social.title === "twitter" && <XIcon fontSize="small" />}
                  {social.title === "youtube" && (
                    <YouTubeIcon fontSize="small" />
                  )}
                </Avatar>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[1, 2, 3, 4].map(() => (
                <li style={{ padding: "10px 0px " }}>
                  <Link
                    href="#!"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Link 1
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Supports
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[1, 2, 3, 4].map(() => (
                <li style={{ padding: "10px 0px " }}>
                  <Link
                    href="#!"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Link 1
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              School Hours
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[1, 2, 3, 4].map(() => (
                <li style={{ padding: "10px 0px " }}>
                  <Link
                    href="#!"
                    color="inherit"
                    sx={{
                      textDecoration: "none",
                      "&:hover": {
                        color: "red",
                      },
                    }}
                  >
                    Link 1
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          textAlign: "center",
          py: 3,
          mt: 4,
          bgcolor: "#41246D",
          color: "white",
        }}
      >
        <Typography variant="body2">
          © 2020 Copyright:{" "}
          <Link href="https://mdbootstrap.com/" color="inherit">
            MDBootstrap.com
          </Link>
        </Typography>
        <Typography variant="body2">
          Privacy Policy | Support | Terms And Conditions
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
