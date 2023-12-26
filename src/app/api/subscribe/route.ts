import { db } from "@/lib/Prisma.db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existed = await db.subscriber.findFirst({
      where: {
        email: body.email,
      },
    });
     // CHECKING EMAIL given is already exist or Not
     if (!body.email) {
      return new Response("Action Prohibited!", { status: 301 });
    }
    // CHECKING EMAIL EXIST FOR NOT 
    if (existed) {
      return new Response("Member Already Existed", { status: 201 });
    }
    // GETTING USERNAME FROM EMAL 
    var str = body.email;
    var nameParts = str.split("@");
    var username = nameParts.length == 2 ? nameParts[0] : null;
    // CREATING SUBSCRIBER 
    await db.subscriber.create({
      data: {
        name: username,
        email: body.email,
      },
    });
    return new Response("Subscribed to  Devletter", { status: 200 });
  } catch (error) {
    return new Response("Could not like.. Please try later" + error, {
      status: 500,
    });
  }
}
