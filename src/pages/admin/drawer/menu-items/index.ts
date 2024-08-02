import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../store/reducers/authSlice";
import { UserType } from "../../../../constants";

const MenuItems = () => {
  const user = useSelector(selectUser);
  const userRole = user ? user.userType : UserType.student;

  const icons = {
    DashboardOutlined: MenuIcon,
    UserOutlined: PeopleIcon,
    LoginOutlined: MenuIcon,
    ProfileOutlined: MenuIcon,
  };

  const managementItems = [
    {
      id: UserType.admin,
      title: UserType.admin,
      type: "item",
      url: `/${userRole}/admin`,
      icon: icons.UserOutlined,
      breadcrumbs: true,
      permission: [UserType.superAdmin],
    },
    {
      id: "payments",
      title: "Payments",
      type: "item",
      url: `/${userRole}/payments`,
      icon: icons.UserOutlined,
      breadcrumbs: true,
      permission: [UserType.superAdmin],
    },
    {
      id: UserType.teacher,
      title: "Teachers",
      type: "item",
      url: `/${userRole}/teachers`,
      icon: icons.UserOutlined,
      breadcrumbs: true,
      permission: [UserType.superAdmin, UserType.admin],
    },
    {
      id: UserType.student,
      title: "Students",
      type: "item",
      url: `/${userRole}/students`,
      icon: icons.UserOutlined,
      breadcrumbs: true,
      permission: [
        UserType.superAdmin,
        UserType.admin,
        UserType.teacher,
        UserType.student,
      ],
    },
    {
      id: "payments-management",
      title: "Payments Management",
      type: "item",
      url: `/${userRole}/payments-management`,
      icon: icons.UserOutlined,
      breadcrumbs: true,
      permission: [UserType.superAdmin],
    },
  ];

  // Filter items based on userRole permissions
  const filteredManagementItems = managementItems.filter((item) => {
    return item.permission.includes(userRole);
  });

  const management = {
    id: "group-management",
    title: "Management",
    type: "group",
    children: filteredManagementItems,
  };

  const pages = {
    id: "authentication",
    title: "Authentication",
    type: "group",
    children: [
      {
        id: "login1",
        title: "Login",
        type: "item",
        url: "",
        icon: icons.LoginOutlined,
        target: true,
      },
    ],
  };

  const menuItems = {
    items: [management, pages],
  };

  return menuItems;
};

export default MenuItems;
