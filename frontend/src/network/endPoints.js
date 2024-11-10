const baseUrl = "/api";

const ENDPOINT = {
  //users endpoint
  signUP: baseUrl + "/users/signup",
  logIn: baseUrl + "/users/login",
  forgotPassword: baseUrl + "/users/password/forgot",
  verifyEmail: baseUrl + "/users/email/verify",
  generateNewToken: baseUrl + "/users/token/new",
  resetPassword: baseUrl + "/users/password/reset",
};

export default ENDPOINT;
