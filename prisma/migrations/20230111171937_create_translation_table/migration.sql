/*
  Warnings:

  - Added the required column `translation` to the `Certificates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Languages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translation` to the `Socials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certificates" ADD COLUMN     "translation" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "translation" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Languages" ADD COLUMN     "translation" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "translation" STRING NOT NULL;

-- AlterTable
ALTER TABLE "Socials" ADD COLUMN     "translation" STRING NOT NULL;
