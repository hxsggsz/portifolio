import { prisma } from "./prisma";

export async function getPortifolio() {
  const data = await prisma.portifolio.findUnique({
    where: {
      id: "d60a741b-0c32-470f-ad45-a526612e214d",
    },
    include: {
      about: {
        orderBy: {
          createdAt: "asc",
        },
      },
      project: true,
      language: {
        orderBy: {
          createdAt: "asc",
        },
      },
      certificate: true,
    },
  });

  return data;
}
