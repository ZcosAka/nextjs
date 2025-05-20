import prisma from "../lib/prisma";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const addUser = async (data: {
  id: string;
  name: string;
  email: string;
}) => {
  return await prisma.user.create({ data });
};
