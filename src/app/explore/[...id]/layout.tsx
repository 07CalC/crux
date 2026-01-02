import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params
  const college = await prisma.college.findUnique({
    where: {
      id: id[0],
    },
  });
  return {
    title: `${college?.name} | cr#x`,
    metadataBase: new URL("https://crux.hs.vc"),
    description: `Find all the information about ${college?.name} here. | cr#x`,
    openGraph: {
      title: college?.name,
      description: `Find all the information about ${college?.name} here.`,
      url: `/explore/${id[0]}`,
      siteName: "Crux",
      images: [
        {
          url: college?.coverImage ? `${college.coverImage}` : "/defaultCollegeImage.png",
          width: 800,
          height: 600,
        },
      ],
    },
    authors: [
      {
        name: "CalC",
        url: "https://vinm.me",
      },
    ],
    twitter: {
      card: 'summary_large_image',
      title: college?.name,
      description: `Find all the information about ${college?.name} here.`,
      images: [`${college?.coverImage || "/defaultCollegeImage.png"}`],
    },

  }
}

export default async function ExploreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
