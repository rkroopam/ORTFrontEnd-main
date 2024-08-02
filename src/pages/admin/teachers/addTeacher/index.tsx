import * as React from "react";
import {
  Avatar,
  Button,
  Box,
  Container,
  CssBaseline,
  Grid,
  TextField as MuiTextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { create_teacher } from "../../../../api/services/user";
import { toast } from "react-toastify";

interface FormValues {
  country: string;
  email: string;
  fName: string;
  lName: string;
  phoneCountryCode: string;
  phoneNumber: string;
  password: string;
}

const validationSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  fName: Yup.string().required("First Name is required"),
  lName: Yup.string().required("Last Name is required"),
  phoneCountryCode: Yup.string().required("Phone Country Code is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  password: Yup.string().required("Password is required"),
});

const AddTeacher = ({
  open,
  handleClose,
  refetch,
}: {
  open: boolean;
  handleClose: () => void;
  refetch: () => void;
}) => {
  const signupMutation = useMutation({
    mutationFn: async (payload: any) => {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
      return create_teacher(payload, token);
    },
    onSuccess: (res: any) => {
      if (res) {
        handleClose();
        refetch();
        toast.success(res.message);
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
      country: "",
      email: "",
      fName: "",
      lName: "",
      phoneCountryCode: "",
      phoneNumber: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      try {
        const payload = {
          country: values.country,
          email: values.email,
          fName: values.fName,
          lName: values.lName,
          phoneCountryCode: values.phoneCountryCode,
          phoneNumber: values.phoneNumber,
          password: values.password,
        };
        await signupMutation.mutateAsync(payload);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">Add Teacher</Typography>
      </DialogTitle>
      <DialogContent>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <Person4Icon />
            </Avatar>
            <form
              id="add-teacher-form"
              onSubmit={formik.handleSubmit}
              style={{ width: "100%", marginTop: "16px" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MuiTextField
                    id="fName"
                    name="fName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fName}
                    error={formik.touched.fName && Boolean(formik.errors.fName)}
                    helperText={formik.touched.fName && formik.errors.fName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiTextField
                    id="lName"
                    name="lName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lName}
                    error={formik.touched.lName && Boolean(formik.errors.lName)}
                    helperText={formik.touched.lName && formik.errors.lName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiTextField
                    id="country"
                    name="country"
                    label="Country"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                    helperText={formik.touched.country && formik.errors.country}
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiTextField
                    id="email"
                    name="email"
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiTextField
                    id="phoneCountryCode"
                    name="phoneCountryCode"
                    label="Phone Country Code"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneCountryCode}
                    error={
                      formik.touched.phoneCountryCode &&
                      Boolean(formik.errors.phoneCountryCode)
                    }
                    helperText={
                      formik.touched.phoneCountryCode &&
                      formik.errors.phoneCountryCode
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <MuiTextField
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiTextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          type="submit"
          form="add-teacher-form"
          variant="contained"
          color="primary"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Adding..." : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTeacher;
