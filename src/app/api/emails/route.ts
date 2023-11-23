import { db } from "@/lib/Prisma.db"
import { NextResponse } from "next/server"



export async function GET (req:Request){
    try {
        const data = await db.subscriber.findMany()
        return NextResponse.json({data}, {status:200})
    } catch (error) {
        return new Response("Something wrong !", {status:500})
    }
}