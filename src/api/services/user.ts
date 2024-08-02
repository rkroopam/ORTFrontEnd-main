import { apiEndPoint } from "../handlers";
import api from "../handlers/api";

const get_users = async (role: string) => {
  const params = { role: role };
  const { data } = await api.get(apiEndPoint?.users, { params });
  return data;
};

const get_AllAdmins = async (user: any, token: any) => {
  const headers = { "x-access-token": token };
  const userData: any = user;
  const { data } = await api.get(apiEndPoint?.getAllAdmins, {
    headers,
    data: userData,
  });
  return data;
};
const get_AllTeachers = async (user: any, token: any) => {
  const headers = { "x-access-token": token };
  const userData: any = user;
  const { data } = await api.get(apiEndPoint?.getAllTeachers, {
    headers,
    data: userData,
  });
  return data;
};

const get_AllStudent = async (user: any, token: any) => {
  const headers = { "x-access-token": token };
  const userData: any = user;
  const { data } = await api.get(apiEndPoint?.getAllStudents, {
    headers,
    data: userData,
  });
  return data;
};

const create_user = async (payload: any) => {
  const { data } = await api.post(apiEndPoint.users, payload);
  return data;
};

const create_admin = async (payload: any, token: any) => {
  const headers = { "x-access-token": `${token}` };
  const { data } = await api.post(apiEndPoint.createAdmin, payload, {
    headers,
  });
  return data;
};

const create_teacher = async (payload: any, token: any) => {
  const headers = { "x-access-token": `${token}` };
  const { data } = await api.post(apiEndPoint.createTeacher, payload, {
    headers,
  });
  return data;
};

const update_admin = async (value: any, id: any, token: any) => {
  const headers = { "x-access-token": `${token}` };
  const { data } = await api.put(`${apiEndPoint.updateAdmin(id)}`, value, {
    headers,
  });
  return data;
};

const update_teacher = async (value: any, id: any, token: any) => {
  const headers = { "x-access-token": `${token}` };
  const { data } = await api.patch(apiEndPoint.updateTeacher, value, {
    headers,
  });
  return data;
};

const get_user_byId = async (id: any) => {
  const { data } = await api.get(apiEndPoint.userById(id));
  return data;
};
const delete_user = async (id: any) => {
  const { data } = await api.delete(apiEndPoint.userById(id));
  return data;
};

// const delete_teacher = async (id: any, token: any) => {
//   const headers = { "x-access-token": `${token}` };
//   const { data } = await api.delete(apiEndPoint.deleteTeacher(id), {
//     headers,
//   });
//   return data;
// };

const delete_admin = async (id: string, token: string) => {
  const headers = { "x-access-token": token };
  const { data } = await api.delete(apiEndPoint.deleteAdmin(id), { headers });
  return data;
};

const sendMailforResetPassword = async (value: any) => {
  const { data } = await api.post(apiEndPoint.sendMailforResetPassword, value);
  return data;
};

const login_user = async (payload: any) => {
  const { data } = await api.post(apiEndPoint.login, payload);
  return data;
};

const update_user = async (value: any, id: any) => {
  const { data } = await api.patch(apiEndPoint.userById(id), value);
  return data;
};

const forgetPassword = async (value: any) => {
  const { data } = await api.post(apiEndPoint.forgetpassword, value);
  return data;
};
const reset_password = async (token: string, password: any) => {
  const { data } = await api.post(
    apiEndPoint.resetPassword,
    { password: password },
    {
      headers: { "x-access-token": token },
    }
  );
  return data;
};

const verifyEmail = async () => {
  const headers = {
    "x-access-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmFhNTU4NzBmZTNkO",
  };
  const { data } = await api.get(apiEndPoint.verifyEmail, {
    headers,
  });
  return data;
};

const getPaymentModels = async (token: any) => {
  const headers = { "x-access-token": token };
  const { data } = await api.get(apiEndPoint.getPaymentModels, { headers });
  return data;
};

const createPaymentModel = async (payload: any, token: string) => {
  const headers = { "x-access-token": token };
  const { data } = await api.post(apiEndPoint.createPaymentModel, payload, {
    headers,
  });
  return data;
};

const updatePaymentModel = async (id: any, token: string) => {
  const headers = { "x-access-token": token };
  const payload = {
    status: "inactive",
  };
  const { data } = await api.put(apiEndPoint.updatePaymentModel(id), payload, {
    headers,
  });
  return data;
};
export {
  get_users,
  create_user,
  login_user,
  update_user,
  get_user_byId,
  delete_user,
  reset_password,
  sendMailforResetPassword,
  forgetPassword,
  verifyEmail,
  create_admin,
  create_teacher,
  get_AllAdmins,
  get_AllTeachers,
  get_AllStudent,
  update_admin,
  update_teacher,
  // delete_teacher,
  delete_admin,
  getPaymentModels,
  createPaymentModel,
  updatePaymentModel,
};