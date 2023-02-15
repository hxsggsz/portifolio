/*
  Warnings:

  - You are about to drop the column `id_certificates` on the `Portifolio` table. All the data in the column will be lost.
  - You are about to drop the column `id_languages` on the `Portifolio` table. All the data in the column will be lost.
  - You are about to drop the column `id_projects` on the `Portifolio` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Portifolio" DROP CONSTRAINT "Portifolio_id_certificates_fkey";

-- DropForeignKey
ALTER TABLE "Portifolio" DROP CONSTRAINT "Portifolio_id_languages_fkey";

-- DropForeignKey
ALTER TABLE "Portifolio" DROP CONSTRAINT "Portifolio_id_projects_fkey";

-- AlterTable
ALTER TABLE "Certificates" ADD COLUMN     "portifolioId" STRING;

-- AlterTable
ALTER TABLE "Languages" ADD COLUMN     "portifolioId" STRING;

-- AlterTable
ALTER TABLE "Portifolio" DROP COLUMN "id_certificates";
ALTER TABLE "Portifolio" DROP COLUMN "id_languages";
ALTER TABLE "Portifolio" DROP COLUMN "id_projects";

-- AlterTable
ALTER TABLE "Projects" ADD COLUMN     "portifolioId" STRING;

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificates" ADD CONSTRAINT "Certificates_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
