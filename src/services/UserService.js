import http from "./HttpUserService";
import authHeader from "./authHeader";

const getPublicContent = () => {
  return http.get("/all");
};

const getUserBoard = () => {
  return http.get("/user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return http.get("/mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return http.get("/admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}

export default UserService;
