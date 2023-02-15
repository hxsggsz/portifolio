-- CreateTable
CREATE TABLE "Portifolio" (
    "id" STRING NOT NULL,

    CONSTRAINT "Portifolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "images" STRING NOT NULL,
    "portifolioId" STRING,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Certificates" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "images" STRING NOT NULL,
    "description" STRING NOT NULL,
    "portifolioId" STRING,

    CONSTRAINT "Certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" STRING NOT NULL,
    "url" STRING NOT NULL,
    "name" STRING NOT NULL,
    "images" STRING NOT NULL,
    "description" STRING NOT NULL,
    "portifolioId" STRING,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Portifolio_id_key" ON "Portifolio"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Languages_id_key" ON "Languages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Certificates_id_key" ON "Certificates"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Projects_id_key" ON "Projects"("id");

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificates" ADD CONSTRAINT "Certificates_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_portifolioId_fkey" FOREIGN KEY ("portifolioId") REFERENCES "Portifolio"("id") ON DELETE SET NULL ON UPDATE CASCADE;
