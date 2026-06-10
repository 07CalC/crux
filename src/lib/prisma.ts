import { getCloudflareContext } from "@opennextjs/cloudflare";
// You can use cache from react to cache the client during the same request
// this is not mandatory and only has an effect for server components
import { cache } from "react";
import { PrismaClient } from "@prisma/client";
import { PrismaD1 } from "@prisma/adapter-d1";

export const getDb = cache(() => {
  const { env } = getCloudflareContext();
  const adapter = new PrismaD1(env.crux);
  return new PrismaClient({ adapter });
});

// If you need access to `getCloudflareContext` in a static route (i.e. ISR/SSG), you should use the async version of `getCloudflareContext` to get the context.
export const getDbAsync = async () => {
  const { env } = await getCloudflareContext({ async: true });
  const adapter = new PrismaD1(env.crux);
  const prisma = new PrismaClient({ adapter });
  return prisma;
};
