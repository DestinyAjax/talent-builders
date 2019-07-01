import { getFunc, postFunc } from "./httpService";

// Login User
const loginService = ({ payload }) => {
    return postFunc(`auth/login`, payload);
};
export default {
    loginService
};
