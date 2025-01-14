import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const id = params.id
    const user = await prisma.user.findUnique({where: {id: parseInt(id, 10)}})
    return NextResponse.json(user)
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const id = params.id
    const data = await request.json()
    
    let password = ''
    if(data.password) password = await hash(data.password, 12)
    const user = await prisma.user.update({
        where: {id: parseInt(id, 10)}, 
        data: {
            username: data.username || null,
            email: data.email || null,
            password: password || null,
        }})
    
        return NextResponse.json(user)
}

export async function DELETE({ params }: { params: { id: string } }) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const id = params.id
    await prisma.user.delete({where: {id: parseInt(id, 10)}})

    return NextResponse.json("Deleted Successfully")
}