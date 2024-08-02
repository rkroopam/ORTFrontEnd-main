import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../../store/reducers/menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useBreakpoints } from "../../../utils/mediaQuery";
import { removeUserData } from "../../../utils/updateCurrentUser";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/reducers";
import { selectUser } from "../../../store/reducers/authSlice";
import { Roles } from "../../../constants";
import { useMutation } from "@tanstack/react-query"; // Adjust import if necessary
import { toast } from "react-toastify";
import { sendMailforResetPassword } from "../../../api/services/user";

const DashboardHeader = () => {
  const { drawerOpen } = useSelector((state: any) => state.menu);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const dispatch = useDispatch();
  const { isMd, isSm, isLg } = useBreakpoints();
  const navigate = useNavigate();
  const user: any = useSelector((state: RootState) => selectUser(state));

  // Define the mutation for resetting password
  const sendMailforResetPasswordMutation = useMutation({
    mutationFn: (payload: any) => sendMailforResetPassword(payload),
    onSuccess: () => {
      toast.success("Password reset instructions sent to your email");
      handleCloseUserMenu(); // Close menu after success
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to send reset instructions");
    },
  });

  const settings = [
    {
      id: 1,
      label: "Logout",
      to: "/auth/login",
    },
    {
      id: 2,
      label: "Reset Password",
      to: "/auth/reset-password",
    },
  ];

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    if (isSm && drawerOpen) {
      dispatch(openDrawer({ drawerOpen: false }));
    } else if (isLg && drawerOpen) {
      dispatch(openDrawer({ drawerOpen: true }));
    }
  }, [isMd, isLg, drawerOpen, dispatch]);

  const handleDrawerToggle = () => {
    dispatch(openDrawer({ drawerOpen: !drawerOpen }));
  };

  const handleLogout = (id: any) => {
    const selectedSetting = settings.find((item) => item.id === id);
    if (selectedSetting) {
      if (selectedSetting.label === "Logout") {
        removeUserData(dispatch);
      } else if (selectedSetting.label === "Reset Password") {
        // Call forgotPasswordMutation here
        sendMailforResetPasswordMutation.mutate({ email: user.username }); // Adjust payload as needed
        return; // Prevent further navigation
      }
      navigate(selectedSetting.to);
    }
  };

  return (
    <Toolbar>
      <>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mx: 1 }}
        >
          {drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {Roles.filter((item) => item.value === user.role).map(
            (item) => item.name
          )}
        </Typography>
      </>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://media.istockphoto.com/id/619379486/photo/smiling-man-in-studio.jpg?s=612x612&w=0&k=20&c=IBWZxcRudIbTIHKtDukZd6Be36ODguJNBohwR8QmgKY="
            />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
              <Typography
                textAlign="center"
                onClick={() => handleLogout(setting.id)}
              >
                {setting.label}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>
  );
};

export default DashboardHeader;
