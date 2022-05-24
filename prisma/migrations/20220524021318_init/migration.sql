-- CreateTable
CREATE TABLE "Pivot" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pivot" TEXT NOT NULL,

    CONSTRAINT "Pivot_pkey" PRIMARY KEY ("id")
);
