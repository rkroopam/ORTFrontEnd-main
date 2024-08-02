import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const IntroductionAboutOurInstitute = () => {
  return (
    <Box p={2}>
      <Box mb={2}>
        <Typography variant="h4" align="center">
          Introduction About Our Institute
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" align="left">
            Maiores montes? Egestas imperdiet voluptates dolor volutpat magnis
            fugit laboris ullamcorper nam? Nostrum atque fames tempore excepteur
            tincidunt? Volutpat rerum laboris potenti, varius dui. Eleifend
            quaerat tempora repudiandae quo, adipisicing mollit nisl, tristique,
            tenetur exi.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" align="left">
            Diamlorem dapibus congue nostrud, purus molestiae, explicabo error
            quia exercitationem, veniam aperiam, odit anim pariatur, per,
            cubilia voluptas porttitor iusto ducimus cubilia! Fames cumque
            pulvinar morbi nobis condimentum provident perferendis.{" "}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IntroductionAboutOurInstitute;
