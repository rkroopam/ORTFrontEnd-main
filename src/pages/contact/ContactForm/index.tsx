import React, { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  number: string;
  message: string;
}

const ContactForm = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const contactMutation = useMutation({
    mutationFn: async (payload: any) => {
      // Replace with your contact form submission logic
      return await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());
    },
    onSuccess: () => {
      toast.success("Your message has been sent successfully!");
      navigate("/");
      formik.resetForm();
    },
    onError: (error: any) => {
      toast.error(error?.message || "Something went wrong");
    },
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      number: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>
    ) => {
      try {
        await contactMutation.mutateAsync(values);
      } catch (error) {
        console.error("Submission failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3}>
        <Box p={3} mt={5}>
          <Box mb={5} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              We would love to hear from you. Please fill out the form below.
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
                gridTemplateColumns: "1fr",
                gap: "1rem",
              }}
            >
              <TextField
                label="Name"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
              />
              <TextField
                label="Email"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
              <TextField
                label="Subject"
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                error={formik.touched.subject && Boolean(formik.errors.subject)}
                helperText={formik.touched.subject && formik.errors.subject}
                fullWidth
              />
              <TextField
                label="Number"
                id="number"
                name="number"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
                fullWidth
              />
              <TextField
                label="Message"
                id="message"
                name="message"
                type="text"
                multiline
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                fullWidth
              />
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
