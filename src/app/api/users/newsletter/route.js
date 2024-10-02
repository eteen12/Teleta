import prisma from "@/lib/prismaClient";

export async function POST(request) {
  const { email } = await request.json();

  try {
    const newSubscriber = await prisma.storeSubscriber.create({
      data: {
        email,
      },
    });
    return new Response(JSON.stringify(newSubscriber), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error.code === "P2002") {
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
export async function GET() {
  const subscribers = await prisma.storeSubscriber.findMany();

  return new Response(JSON.stringify(subscribers), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
