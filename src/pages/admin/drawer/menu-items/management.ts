import PeopleIcon from '@mui/icons-material/People';
const management = {
  id: 'group-management',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'student',
      title: 'Students',
      type: 'item',
      url: '/admin/students',
      icon: PeopleIcon,
      breadcrumbs: true
    },
    {
      id: 'teacher',
      title: 'Teachers',
      type: 'item',
      url: '/admin/teachers',
      icon: PeopleIcon,
      breadcrumbs: true
    },
  ]
};

export default management;
