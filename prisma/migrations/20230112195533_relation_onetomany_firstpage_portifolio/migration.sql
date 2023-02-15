-- AlterTable
ALTER TABLE "FirstPage" ADD COLUMN     "portifolioId" STRING;

-- AddForeignKey
ALTER TABLE "FirstPage" ADD CONSTRAINT "FirstPage_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
