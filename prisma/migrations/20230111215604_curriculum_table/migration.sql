/*
  Warnings:

  - You are about to drop the column `curriculum` on the `Socials` table. All the data in the column will be lost.
  - Added the required column `curriculum` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "curriculum" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Socials" DROP COLUMN "curriculum";
