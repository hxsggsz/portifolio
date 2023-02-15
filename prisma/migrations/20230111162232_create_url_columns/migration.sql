/*
  Warnings:

  - Added the required column `urlRepository` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialLinks` to the `Socials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "urlRepository" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Socials" ADD COLUMN     "socialLinks" STRING NOT NULL;
