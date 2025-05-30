import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/route";

export async function GET() {
    const session = await getServerSession(authOptions)
    return NextResponse.json({ authenticated: !!session })
}