import NextAuth, { User, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    pages: {
        signIn: '/auth/signin',
    },
    session: {
        strategy: "jwt",
        maxAge: 30*60,
        updateAge: 5*60
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "hello@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if (!user) throw new Error('User not found')

                const isPasswordValid = await compare(credentials.password, user.password)

                if (!isPasswordValid) throw new Error('Invalid password')

                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.username,
                }
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
            const userExists = await prisma.user.findUnique({
                where: {email: session.user.email}
            })

            if(!userExists) {
                throw new Error('User deleted!')
            }

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                }
            }
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as User
                return {
                    ...token,
                    id: u.id,
                }

            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }