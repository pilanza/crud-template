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

    const { id } = await params
    const data = await request.json()
    
    let password;
    if(data.password) {
        password = await hash(data.password, 12);
    }

    const user = await prisma.user.update({
        where: {id: parseInt(id, 10)}, 
        data: {
            username: data.username || null,
            email: data.email || null,
            password: password,
        }
    })
    
    return new NextResponse(JSON.stringify(user), { status: 201 })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const { id } = await params
    await prisma.user.delete({where: {id: parseInt(id, 10)}})

    return new NextResponse(JSON.stringify('Deleted successfully!'), { status: 201 })
}