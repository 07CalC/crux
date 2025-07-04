import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const userAgent = req.headers.get("user-agent");
    const fetchMode = req.headers.get('sec-fetch-mode');
    const fetchSite = req.headers.get('sec-fetch-site');
    const acceptLang = req.headers.get('accept-language');
    const browserRegex = /(Mozilla|Chrome|Gecko|Firefox|AppleWebKit|Opera|Safari)/i;
    if (!browserRegex.test(userAgent || "") || !fetchMode || !fetchSite || !acceptLang) {
        return new NextResponse(JSON.stringify({ message: "Invalid request and fuck you" }), { status: 400 });
    }
    const data = await req.json();
    const { collegeId, imageUrl } = data;

    if (!collegeId || !imageUrl) {
        return new Response("Missing collegeId or imageUrl", { status: 400 });
    }

    try {
        const collegeImage = await prisma.collegeImage.create({
            data: {
                url: imageUrl,
                collegeId: collegeId
            }
        });

        return new Response(JSON.stringify(collegeImage), { status: 200 });
    } catch (error) {
        console.error("Error updating college gallery:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}
