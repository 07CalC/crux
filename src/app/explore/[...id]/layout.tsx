import { prisma } from "@/lib/prisma";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params
  const college = await prisma.college.findUnique({
    where: {
      id: id[0],
    },
  });
  return {
    title: `${college?.name} | cr#x`,
    description: `Find all the information about ${college?.name} here. | cr#x`,
    openGraph: {
      title: college?.name,
      description: `Find all the information about ${college?.name} here.`,
      url: `https://crux.ix.tc/explore/${id[0]}`,
      siteName: "Crux",
      images: [
        {
          url: college?.coverImage ? `https://crux.ix.tc${college.coverImage}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s",
          width: 800,
          height: 600,
        },
      ],
    },
    authors: [
      {
        name: "CalC",
        url: "https://calc.is-a.dev",
      },
    ],
    twitter: {
      card: 'summary_large_image',
      title: college?.name,
      description: `Find all the information about ${college?.name} here.`,
      images: [`${college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s"}`],
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
