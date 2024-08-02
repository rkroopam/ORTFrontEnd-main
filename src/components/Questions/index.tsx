import React, { useState } from "react";
import { Container, Typography, Button, Box, TextField } from "@mui/material";

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [parentDetails, setParentDetails] = useState({
    studentFirstName: "",
    studentLastName: "",
    studentAge: "",
  });

  const handleRoleSelect = (selectedRole: any) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleStudentDetailChange = (e: any) => {
    setStudentDetails({ ...studentDetails, [e.target.name]: e.target.value });
  };

  const handleParentDetailChange = (e: any) => {
    setParentDetails({ ...parentDetails, [e.target.name]: e.target.value });
  };

  const renderStep1 = () => (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Online Reading Tutor
      </Typography>
      <Typography variant="h6" gutterBottom>
        Please select an option:
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mb: 2, width: "100%" }}
          onClick={() => handleRoleSelect("student")}
        >
          I'm a student
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ width: "100%" }}
          onClick={() => handleRoleSelect("parent")}
        >
          I'm a parent/guardian
        </Button>
      </Box>
    </Box>
  );

  const renderStudentForm = () => (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Student Details
      </Typography>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={studentDetails.firstName}
        onChange={handleStudentDetailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={studentDetails.lastName}
        onChange={handleStudentDetailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Age"
        name="age"
        type="number"
        value={studentDetails.age}
        onChange={handleStudentDetailChange}
        sx={{ mb: 2 }}
      />
      {studentDetails.age && (
        <Typography variant="body1" color="error" gutterBottom>
          {parseInt(studentDetails.age) < 13 &&
            "You are not allowed to proceed."}
          {parseInt(studentDetails.age) >= 13 &&
            parseInt(studentDetails.age) <= 18 &&
            "You are allowed to proceed but must talk to an adult for payments."}
        </Typography>
      )}
    </Box>
  );

  const renderParentForm = () => (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Student Information
      </Typography>
      <TextField
        fullWidth
        label="Student's First Name"
        name="studentFirstName"
        value={parentDetails.studentFirstName}
        onChange={handleParentDetailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Student's Last Name"
        name="studentLastName"
        value={parentDetails.studentLastName}
        onChange={handleParentDetailChange}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Student's Age"
        name="studentAge"
        type="number"
        value={parentDetails.studentAge}
        onChange={handleParentDetailChange}
        sx={{ mb: 2 }}
      />
    </Box>
  );

  return (
    <Container maxWidth="sm">
      {step === 1 && renderStep1()}
      {step === 2 && role === "student" && renderStudentForm()}
      {step === 2 && role === "parent" && renderParentForm()}
    </Container>
  );
};

export default Questionnaire;
