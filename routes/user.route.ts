import nc from "next-connect";
import { handleGetUsers, handleAddUser } from "../controllers/user.controller";

const userHandler = nc();

userHandler.get(handleGetUsers);
userHandler.post(handleAddUser);

export default userHandler;
