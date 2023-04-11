import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const password = "password";

async function seed() {
  await prisma.user.deleteMany();

  const quantity = 3;

  Array.from(Array(quantity).keys()).forEach(async () => {
    await prisma.user.create({
      data: {
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        password: await bcrypt.hash(password, 10),
        city: faker.address.city(),
        state: faker.address.state(),
      },
    });
  });
}

seed().finally(() => prisma.$disconnect());
