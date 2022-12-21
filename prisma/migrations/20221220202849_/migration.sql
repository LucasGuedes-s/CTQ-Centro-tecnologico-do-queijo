-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedidos" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "produto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "pedidos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administradores" (
    "id" SERIAL NOT NULL,
    "matricula" INTEGER NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pedidos_email_key" ON "pedidos"("email");

-- AddForeignKey
ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
