import { db } from "@/lib/Prisma.db"


const adminPage = () => {
const getEmail = async () => {
    "use server"
    const users = await db.subscriber.findMany()
    return users.length
}

    return(
        <div className="h-screen relative flex justify-center items-center w-full p-2">
            <h1 className=" border rounded-md text-white font-poppins text-4xl p-4 max-sm:text-2xl">Total Emails = {getEmail()}</h1>
        </div>
    )
}


export default adminPage