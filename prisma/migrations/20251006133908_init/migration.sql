-- CreateTable
CREATE TABLE "Petshop" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "especie" TEXT NOT NULL,
    "idade" TEXT,
    "dono" TEXT NOT NULL,

    CONSTRAINT "Petshop_pkey" PRIMARY KEY ("id")
);
