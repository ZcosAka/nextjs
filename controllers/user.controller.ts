// controllers/user.controller.ts
import { Request, Response } from "express";
import { addUser, getAllUsers } from "../models/user.model";
// import { getAllUsers, createUser } from "";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    console.log("all users", users);
    if (users.length <= 0) {
      res.status(200).json({
        message: "user empty",
      });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const handleAddUser = async (req: Request, res: Response) => {
  try {
    const { name, email, id } = req.body;
    const user = await addUser({ id, name, email });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
