/*
  Warnings:

  - You are about to drop the column `socialImages` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `socials` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "socialImages";
ALTER TABLE "Contact" DROP COLUMN "socials";

-- CreateTable
CREATE TABLE "Socials" (
    "id" STRING NOT NULL,
    "socials" STRING NOT NULL,
    "socialImages" STRING NOT NULL,
    "contactId" STRING,

    CONSTRAINT "Socials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Socials_id_key" ON "Socials"("id");

-- AddForeignKey
ALTER TABLE "Socials" ADD CONSTRAINT "Socials_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contact"("id") ON DELETE SET NULL ON UPDATE CASCADE;
