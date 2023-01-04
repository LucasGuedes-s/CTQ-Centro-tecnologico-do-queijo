/*
  Warnings:

  - A unique constraint covering the columns `[matricula]` on the table `administradores` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `status` to the `pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "pedidos_email_key";

-- AlterTable
ALTER TABLE "pedidos" ADD COLUMN     "status" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "administradores_matricula_key" ON "administradores"("matricula");
