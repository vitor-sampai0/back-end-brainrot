-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_brainrots" (
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
INSERT INTO "new_brainrots" ("concluida", "cost", "criadaEm", "id", "img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "img_7", "img_8", "income", "name", "rarity_1", "rarity_2", "rarity_3", "rarity_4", "rarity_5", "rarity_6", "rarity_7", "rarity_8") SELECT "concluida", "cost", "criadaEm", "id", "img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "img_7", "img_8", "income", "name", "rarity_1", "rarity_2", "rarity_3", "rarity_4", "rarity_5", "rarity_6", "rarity_7", "rarity_8" FROM "brainrots";
DROP TABLE "brainrots";
ALTER TABLE "new_brainrots" RENAME TO "brainrots";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
