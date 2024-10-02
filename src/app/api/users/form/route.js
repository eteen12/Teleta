import prisma from "@/lib/prismaClient";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const newUser = await prisma.storeUser.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response(JSON.stringify(newUser), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Contnent-Type": "application/json" },
    });
  }
}

export async function GET() {
  const users = await prisma.storeUser.findMany();

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
