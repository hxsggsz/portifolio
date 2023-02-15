/*
  Warnings:

  - You are about to drop the column `portifolioId` on the `Certificates` table. All the data in the column will be lost.
  - You are about to drop the column `portifolioId` on the `Languages` table. All the data in the column will be lost.
  - You are about to drop the column `portifolioId` on the `Projects` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificates" DROP CONSTRAINT "Certificates_portifolioId_fkey";

-- DropForeignKey
ALTER TABLE "Languages" DROP CONSTRAINT "Languages_portifolioId_fkey";

-- DropForeignKey
ALTER TABLE "Projects" DROP CONSTRAINT "Projects_portifolioId_fkey";

-- AlterTable
ALTER TABLE "Certificates" DROP COLUMN "portifolioId";

-- AlterTable
ALTER TABLE "Languages" DROP COLUMN "portifolioId";

-- AlterTable
ALTER TABLE "Portifolio" ADD COLUMN     "id_certificates" STRING;
ALTER TABLE "Portifolio" ADD COLUMN     "id_languages" STRING;
ALTER TABLE "Portifolio" ADD COLUMN     "id_projects" STRING;

-- AlterTable
ALTER TABLE "Projects" DROP COLUMN "portifolioId";

-- AddForeignKey
ALTER TABLE "Portifolio" ADD CONSTRAINT "Portifolio_id_languages_fkey" FOREIGN KEY ("id_languages") REFERENCES "Languages"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portifolio" ADD CONSTRAINT "Portifolio_id_certificates_fkey" FOREIGN KEY ("id_certificates") REFERENCES "Certificates"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portifolio" ADD CONSTRAINT "Portifolio_id_projects_fkey" FOREIGN KEY ("id_projects") REFERENCES "Projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
