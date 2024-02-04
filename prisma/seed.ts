import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const transaction = await prisma.transaction.create({
    data: {
      type: "PAY",
      amount: 100,
      decimal: 0,
      senderId: "a6b56cc8-1b12-41f0-ba63-c24799d332cd",
      receiverId: "dd07919d-3b8b-44df-ad98-d1c119f13f82",
      state: "APPROVED",
      walletId: "f198e997-6897-437e-9e14-7ba19284b529",
    },
    include: {
      wallet: true,
    },
  });

  console.log(transaction);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
