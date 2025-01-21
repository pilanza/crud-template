import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const page_size = +process.env.DASHBOARD_PAGE_SIZE

export async function GET(request: NextRequest) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})

    const currentPage = request.nextUrl.searchParams.get('p') ?? 0
    const query = request.nextUrl.searchParams.get('q') ?? ""

    const users = await prisma.user.findMany({
        skip:+currentPage * page_size,
        take:page_size,
        where: {
            OR: [
                {
                    username: {
                        contains: query,
                    }
                },
                {
                    email: {
                        contains: query
                    }
                }
            ]
        },
        omit: {
            password: true
        }
    })

    const total = await prisma.user.count();
    const totalPages = Math.ceil(+total/page_size)

    const json = {
        data: users,
        metadata: {
            totalPages,
            currentPage
        }
    }

    return NextResponse.json(json)
}

export async function POST(request: Request) {
    const session = await getServerSession()
    if(!session) return new NextResponse(null, {status: 401})
    
    const data = await request.json()

    let user = await prisma.user.findFirst({where: {email: data.email}})
    if(user) {
        throw new Error('User already exists')
    }

    const password  = await hash(data.password, 12)
    user = await prisma.user.create({
        data: {
            username: data.username || null,
            email: data.email || null,
            password: password || null,
        }
    })

    return new NextResponse(JSON.stringify(user), { status: 201 })
} 