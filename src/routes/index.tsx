import React from "react";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Loadable from "../components/lodable";
import ProtectedRoute from "./protectedRoute";
import Admins from "../pages/admin/admin";
import ProfilePage from "../pages/profile";
import PasswordResetRequest from "../pages/auth/resetpassword/PasswordResetRequest";
import VerifyEmail from "../pages/auth/verifyEmail";
import PaymentManagement from "../pages/admin/PaymentManagement";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import PageNotFound from "../pages/404";
import { UserType } from "../constants";
import StudentInfoForm from "../pages/initialTest/StudentInfoForm";

const Login = Loadable(lazy(() => import("../pages/auth/login")));
const SignUp = Loadable(lazy(() => import("../pages/auth/signUp")));
const Forgetpassword = Loadable(
  lazy(() => import("../pages/auth/forgetpassword/forgetpassword"))
);
const OTPVerificationDialog = Loadable(
  lazy(() => import("../pages/auth/forgetpassword/Otp"))
);
const Courses = Loadable(lazy(() => import("../pages/courses")));
const AdminPage = Loadable(lazy(() => import("../pages/admin")));
const Student = Loadable(lazy(() => import("../pages/admin/students")));
const Teacher = Loadable(lazy(() => import("../pages/admin/teachers")));
const Dashboard = Loadable(lazy(() => import("../pages/admin/dashboard")));
const Payments = Loadable(lazy(() => import("../pages/admin/Payments")));
const InitialTest = Loadable(lazy(() => import("../pages/initialTest")));

// Route configuration
const routes = [
  {
    path: "/",
    // element: <InitialTest />,
    element: <Login />,
    children: [
      {
        path: "/",
        // element: <InitialTest />,
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    // element: <InitialTest />,
    element: <PageNotFound />,
  },
  {
    path: "/studentinfo",
    element: <StudentInfoForm />,
  },
  {
    path: "/instructionpage1",
    element: <InitialTest />,
  },

  {
    path: `/${UserType.superAdmin}`,
    element: (
      <ProtectedRoute element={<AdminPage />} roles={[UserType.superAdmin]} />
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute
            element={<Dashboard />}
            roles={[UserType.superAdmin]}
          />
        ),
      },
      {
        path: "students",
        element: (
          <ProtectedRoute element={<Student />} roles={[UserType.superAdmin]} />
        ),
      },
      {
        path: "teachers",
        element: (
          <ProtectedRoute element={<Teacher />} roles={[UserType.superAdmin]} />
        ),
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute element={<Admins />} roles={[UserType.superAdmin]} />
        ),
      },
      {
        path: "payments",
        element: (
          <ProtectedRoute
            element={<Payments />}
            roles={[UserType.superAdmin]}
          />
        ),
      },
      {
        path: "payments-management",
        element: (
          <ProtectedRoute
            element={<PaymentManagement />}
            roles={[UserType.superAdmin]}
          />
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute
            element={<ProfilePage />}
            roles={[UserType.superAdmin]}
          />
        ),
      },
    ],
  },
  {
    path: `/${UserType.admin}`,
    element: <ProtectedRoute element={<AdminPage />} roles={["admin"]} />,
    children: [
      {
        path: "dashboard",
        element: <ProtectedRoute element={<Dashboard />} roles={["admin"]} />,
      },
      {
        path: "students",
        element: <ProtectedRoute element={<Student />} roles={["admin"]} />,
      },
      {
        path: "teachers",
        element: <ProtectedRoute element={<Teacher />} roles={["admin"]} />,
      },
      {
        path: "profile",
        element: <ProtectedRoute element={<ProfilePage />} roles={["admin"]} />,
      },
    ],
  },
  {
    path: `/${UserType.teacher}`,
    element: (
      <ProtectedRoute element={<AdminPage />} roles={[UserType.teacher]} />
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute element={<Dashboard />} roles={[UserType.teacher]} />
        ),
      },
      {
        path: "students",
        element: (
          <ProtectedRoute element={<Student />} roles={[UserType.teacher]} />
        ),
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute element={<ProfilePage />} roles={["superAdmin"]} />
        ),
      },
    ],
  },
  {
    path: `/${UserType.student}`,
    element: <ProtectedRoute element={<Courses />} roles={["student"]} />,
    children: [
      // {
      //   path:'landing-page'
      //   element:<ProtectedRoute element={<learnerLandingPage/>} roles={['student']}/>
      // },
      {
        path: "courses",
        element: <ProtectedRoute element={<Courses />} roles={["student"]} />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute element={<ProfilePage />} roles={["student"]} />
        ),
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "forgetpassword",
        element: <Forgetpassword />,
      },
      {
        path: "otp",
        element: <OTPVerificationDialog />,
      },
      {
        path: "reset-password-request",
        element: <PasswordResetRequest />,
      },
      {
        path: `reset-password`,
        element: <ResetPassword />,
      },
      {
        path: `verify-mail`,
        element: <VerifyEmail />,
      },
    ],
  },
];

// Main component exporting routes
const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
