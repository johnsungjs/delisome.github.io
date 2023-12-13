import axios from "axios";
import { urlLogin, urlRegister } from "../api-config/endpointUrl";
import { alertError, alertWarning } from "../../custom-alert/customGeneralAlert";

//usage example:
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const [email, password] = [e.target[0].value, e.target[1].value];
//   const res = await hitLogin({ email, password });

//   if (res && res.data.status === 200) {
//     navigate("/home");
//   }
// };

export async function hitLogin({ email, password }) {
  if (email.length < 1) {
    alertWarning("username wajib diisi");
    return;
  }

  if (password.length < 1) {
    alertWarning("password wajib diisi");
    return;
  }

  const reqBody = { returnStatus: 200, email, password };

  const res = await axios.post(urlLogin, reqBody).catch((e) => {
    alertError(e);
    console.log('error login service', e);
  });

  if (res && res.data.status === 200) {
    localStorage.setItem("authToken", res.data.data.authToken);
    localStorage.setItem("refreshToken", res.data.data.refreshToken);
  }

  return res;

}

export async function hitRegister({ name, email, phone_number, password, rePassword }) {
  if (name.length < 1) {
    alertWarning("nama wajib diisi");
    return;
  }

  if (email.length < 1) {
    alertWarning("email wajib diisi");
    return;
  }

  if (phone_number.length < 1) {
    alertWarning("nomor telepon wajib diisi");
    return;
  }

  if (password.length < 1) {
    alertWarning("password wajib diisi");
    return;
  }

  if (password !== rePassword) {
    alertWarning("pastikan password yang anda masukkan telah sama");
    return;
  }

  const reqBody = { returnStatus: 200, name, email, phone_number, password };

  const res = await axios.post(urlRegister, reqBody).catch((e) => {
    alertError(e);
    console.log("error register service", e);
  });
  console.log("res: ", res);
  return res;

}

export async function hitLogout() {
  localStorage.clear();
}