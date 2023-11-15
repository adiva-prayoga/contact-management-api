import { PrismaClient } from "@prisma/client";
import { registerUserValidation } from "../validation/user-validation.js"
import { validate } from "../validation/validation.js"
import bcript from "bcrypt"

const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await PrismaClient.user.count({
    where: {
      username: user.username
    }
  })

  if(countUser === 1){
    throw new ResponseError(400, "Username already exists");
  }

  user.password = await bcript.hash(user.password, 10)

  return PrismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true
    }
  })
}

export default {
  register
}