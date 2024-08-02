import MenuIcon from '@mui/icons-material/Menu';
const icons = {
  DashboardOutlined:MenuIcon,
  UserOutlined:MenuIcon,
};

const dashboard = {
  id: 'group-dashboard',
  title: '',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/admin/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
