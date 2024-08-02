import React, { useEffect, useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Switch,
  Button,
  TextField,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  Link,
  Container,
  Paper,
  Box,
} from "@mui/material";
import { useSafeNavigate } from "../../../components/hooks/useSafeNavigate";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { login_user } from "../../../api/services/user";
import { setCurrentUser } from "../../../store/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/reducers/authSlice";
import {
  checkUserDetails,
  dispatchUser,
  setToken,
  setUserData,
} from "../../../utils/updateCurrentUser";
import { RootState } from "../../../store/reducers";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [agreed, setAgreed] = useState(false);

  const navigate = useSafeNavigate();
  const dispatch = useDispatch();
  const user: any = useSelector((state: RootState) => selectUser(state));

  const loginMutation = useMutation({
    mutationFn: (payload: FormValues) => login_user(payload),
    onSuccess: (res: any) => {
      if (res) {
        setUserData(res.data);
        setToken(res.data.token, dispatch);
        setCurrentUser(res.data);
        dispatchUser(dispatch, res.data);
        toast.success("Login successful");
        formik.resetForm();
        routeOnLogined(res.data.userType);
      } else {
        toast.error("Something went wrong");
      }
    },
    onError: (error: any) => {
      toast.error(error?.message);
    },
  });
  useEffect(() => {
    const checkAndRouteUser = async () => {
      if (user == null) {
        const uData = await checkUserDetails(dispatch);
        if (uData?.userType) {
          routeOnLogined(uData?.userType);
        }
      } else {
        routeOnLogined(user?.userType);
      }
    };

    void checkAndRouteUser();
  }, [user, dispatch]);

  const routeOnLogined = (data: any) => {
    const role = data.role;
    console.log(role, "hiiiellooooo");
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "superAdmin") {
      navigate("/superAdmin/dashboard");
    } else if (role === "teacher") {
      navigate("/teacher/dashboard");
    } else {
      try {
        const formFilled = "data.studentInfoFormFilled";
        const testSubmitted = "data.testSubmitted";
        const paymentDone = "data.paymentDone";
        if (formFilled) {
          navigate("/studentinfo");
        } else if (!testSubmitted) {
          navigate("/student/initialTest");
        } else if (!paymentDone) {
          navigate("/student/payment");
        } else {
          navigate("/student/courses");
        }
      } catch (error) {
        console.error("Error checking student status:", error);
        navigate("/");
      }
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      try {
        loginMutation.mutate(values);
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Box p={4} mt={5}>
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Login and start your journey.
          </Typography>
          <form onSubmit={formik.handleSubmit} style={{ marginTop: "16px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="email"
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
              <Grid item xs={12}>
                <TextField
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
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <FormGroup row>
                  <FormControlLabel
                    label="Remember me"
                    control={
                      <Switch
                        checked={agreed}
                        onChange={(event) => setAgreed(event.target.checked)}
                        color="primary"
                      />
                    }
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={formik.isSubmitting || loginMutation.isPending}
                  fullWidth
                  style={{ marginTop: "16px" }}
                >
                  {formik.isSubmitting || loginMutation.isPending
                    ? "Loading..."
                    : "Login"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  <Link color="primary" href="/auth/forgetpassword">
                    Forgot your password?
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body2" align="center">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" color="primary">
                    Sign up
                  </Link>
                  .
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
