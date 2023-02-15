-- CreateTable
CREATE TABLE "FirstPage" (
    "id" STRING NOT NULL,
    "content" STRING NOT NULL,
    "images" STRING NOT NULL,

    CONSTRAINT "FirstPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FirstPage_id_key" ON "FirstPage"("id");
