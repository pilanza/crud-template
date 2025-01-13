import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

type dataType = {
    username: string,
    email: string,
    password: string
}

export async function fetchCurrentUser() {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})
}

export async function createUser (data: dataType) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    let password = ''
    if(data.password) password = await hash(data.password, 12)
    await prisma.user.create({
        data: {
            username: data.username || null,
            email: data.email || null,
            password: password || null,
        }
    })
} 

export async function fetchUser (id: string) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const user = await prisma.user.findUnique({where: {id: parseInt(id, 10)}})
    return user
}

export async function updateUser (data: dataType, id: string) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})
    
    let password = ''
    if(data.password) password = await hash(data.password, 12)
    await prisma.user.update({
        where: {id: parseInt(id, 10)}, 
        data: {
            username: data.username || null,
            email: data.email || null,
            password: password || null,
        }})
}

export async function DELETE(id: string) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    await prisma.user.delete({where: {id: parseInt(id, 10)}})
}