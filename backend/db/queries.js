import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createNewUser(username, password){
    await prisma.users.create({
        data:{
            username, password
        }
    })
}

export async function getUser(username){
    const user = await prisma.users.findFirst({
        where:{
            username
        }
    })

    return user;
}