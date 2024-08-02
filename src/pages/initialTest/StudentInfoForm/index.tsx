import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Paper,
  Box,
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const StudentInfoForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dob: "",
      isSelf: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      dob: Yup.date().required("Required"),
      isSelf: Yup.boolean().oneOf(
        [true],
        "You must confirm you are taking the test for yourself"
      ),
    }),
    onSubmit: () => {
      // navigate("/next-step"); // Change to your next step route
    },
  });

  const handleBack = () => {
    navigate("/previous-step"); // Change to your previous step route
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Box p={4} mt={5} textAlign="center">
          <Typography variant="h5">Student Info</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="dob"
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="isSelf"
                      name="isSelf"
                      color="primary"
                      checked={formik.values.isSelf}
                      onChange={formik.handleChange}
                    />
                  }
                  label="I'm taking the test for myself"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="primary"
                  variant="contained"
                  fullWidth
                  type="submit"
                  onClick={() => navigate("/instructionpage1")}
                >
                  Next
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  color="secondary"
                  variant="outlined"
                  fullWidth
                  onClick={handleBack}
                >
                  Back
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default StudentInfoForm;
