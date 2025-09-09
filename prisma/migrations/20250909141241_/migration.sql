-- CreateTable
CREATE TABLE "tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "brainrots" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "img_1" TEXT,
    "img_2" TEXT,
    "img_3" TEXT,
    "img_4" TEXT,
    "img_5" TEXT,
    "img_6" TEXT,
    "img_7" TEXT,
    "img_8" TEXT,
    "rarity_1" TEXT,
    "rarity_2" TEXT,
    "rarity_3" TEXT,
    "rarity_4" TEXT,
    "rarity_5" TEXT,
    "rarity_6" TEXT,
    "rarity_7" TEXT,
    "rarity_8" TEXT,
    "cost" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "favorite" BOOLEAN NOT NULL DEFAULT false,
    "concluida" BOOLEAN NOT NULL DEFAULT false,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
