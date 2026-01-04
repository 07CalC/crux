import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, feedback, imageUrl } = data;

  if (!email || !feedback) {
    return new Response("Missing email or feedback", { status: 400 });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response("Invalid email format", { status: 400 });
  }

  try {
    const newFeedback = await prisma.feedback.create({
      data: {
        email: email,
        feedback: feedback,
        imageUrl: imageUrl || null,
      },
    });

    return new Response(JSON.stringify(newFeedback), { status: 200 });
  } catch (error) {
    console.error("Error creating feedback:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
