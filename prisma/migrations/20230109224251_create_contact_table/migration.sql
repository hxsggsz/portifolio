-- CreateTable
CREATE TABLE "Contact" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "socials" STRING NOT NULL,
    "socialImages" STRING NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_id_key" ON "Contact"("id");
