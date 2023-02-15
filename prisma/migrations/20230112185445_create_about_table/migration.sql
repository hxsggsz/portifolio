-- CreateTable
CREATE TABLE "About" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "translation" STRING NOT NULL DEFAULT 'ptbr',
    "portifolioId" STRING,

    CONSTRAINT "About_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "About_id_key" ON "About"("id");

-- AddForeignKey
ALTER TABLE "About" ADD CONSTRAINT "About_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
