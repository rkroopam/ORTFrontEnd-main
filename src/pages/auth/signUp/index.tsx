import React from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { create_user } from "../../../api/services/user";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../../utils/updateCurrentUser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box, Container, Paper, Typography } from "@mui/material";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  country: string;
  phoneNumber: string;
  age: number;
  grade: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const signupMutation = useMutation({
    mutationFn: (payload: any) => create_user(payload),
    onSuccess: (res: any) => {
      if (res) {
        setUserData(res.data);

        // setToken(res.token);
        // dispatchUser(dispatch, res.data);
        toast.success("Verification link sent on email");
        navigate("/auth/login");
        formik.resetForm();
      } else {
        toast.error("Something went wrong");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      country: "",
      phoneNumber: "",
      age: 0,
      grade: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email")], "Emails must match")
        .required("Required"),
      phoneNumber: Yup.string().required("Required"),
      age: Yup.number().required("Required").min(0, "Invalid age"),
      grade: Yup.string().required("Required"),
    }),
    onSubmit: async (
      values: any,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      try {
        const payload = {
          fName: values.firstName,
          lName: values.lastName,
          email: values.email,
          confirmEmail: values.confirmEmail,
          country: values.country,
          phoneNumber: values.phoneNumber,
          age: values.age,
          grade: values.grade,
        };
        await signupMutation.mutateAsync(payload);
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={3} mt={5}>
          <Box mb={5} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <Typography variant="body1">
              We assure you to keep your data secure and provide you the best
              services we can.
            </Typography>
          </Box>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              margin: "2.5rem auto 3.125rem",
              maxWidth: "30rem",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <TextField
                label="First name"
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                fullWidth
              />
              <TextField
                label="Last name"
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                fullWidth
              />
              <TextField
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
              <TextField
                label="Confirm Email"
                id="confirmEmail"
                name="confirmEmail"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmEmail}
                error={
                  formik.touched.confirmEmail &&
                  Boolean(formik.errors.confirmEmail)
                }
                helperText={
                  formik.touched.confirmEmail && formik.errors.confirmEmail
                }
                fullWidth
              />
              <TextField
                label="Age"
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.age}
                error={formik.touched.age && Boolean(formik.errors.age)}
                helperText={formik.touched.age && formik.errors.age}
                fullWidth
              />
              <TextField
                label="Grade"
                id="grade"
                name="grade"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.grade}
                error={formik.touched.grade && Boolean(formik.errors.grade)}
                helperText={formik.touched.grade && formik.errors.grade}
                fullWidth
              />
              <div style={{ gridColumn: "span 2" }}>
                <div style={{ position: "relative" }}>
                  <FormControl fullWidth sx={{ marginBottom: "20px" }}>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Select
                      id="country"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.country && Boolean(formik.errors.country)
                      }
                    >
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    label="Phone number"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    style={{ width: "100%" }}
                    fullWidth
                  />
                </div>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
              >
                Sign Up
              </Button>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
