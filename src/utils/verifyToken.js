import { jwtDecode } from "jwt-decode";

 const verifyToken = (token) =>
{
    return jwtDecode(token);
};
export default verifyToken