-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "descricao" TEXT,
    "perfilId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegistroHora" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "horaInicio" TIMESTAMP(3),
    "horaIntervalo" TIMESTAMP(3),
    "horaRetorno" TIMESTAMP(3),
    "horaFim" TIMESTAMP(3),
    "dataReferencia" TIMESTAMP(3) NOT NULL,
    "idJustificativa" INTEGER,
    "horaInicioJustificativa" TIMESTAMP(3),
    "horaIntervaloJustificativa" TIMESTAMP(3),
    "horaRetornoJustificativa" TIMESTAMP(3),
    "horaFimJustificativa" TIMESTAMP(3),

    CONSTRAINT "RegistroHora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Justificativa" (
    "id" SERIAL NOT NULL,
    "idRegistroHora" INTEGER NOT NULL,
    "idMotivo" INTEGER NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Justificativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motivo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Motivo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Perfil_nome_key" ON "Perfil"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Motivo_descricao_key" ON "Motivo"("descricao");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_perfilId_fkey" FOREIGN KEY ("perfilId") REFERENCES "Perfil"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroHora" ADD CONSTRAINT "RegistroHora_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegistroHora" ADD CONSTRAINT "RegistroHora_idJustificativa_fkey" FOREIGN KEY ("idJustificativa") REFERENCES "Justificativa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Justificativa" ADD CONSTRAINT "Justificativa_idMotivo_fkey" FOREIGN KEY ("idMotivo") REFERENCES "Motivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
