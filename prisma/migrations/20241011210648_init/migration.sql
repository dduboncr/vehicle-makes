-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VehicleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vehicleMakeId" TEXT,
    CONSTRAINT "VehicleType_vehicleMakeId_fkey" FOREIGN KEY ("vehicleMakeId") REFERENCES "VehicleMake" ("makeId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_VehicleType" ("id", "name", "typeId", "vehicleMakeId") SELECT "id", "name", "typeId", "vehicleMakeId" FROM "VehicleType";
DROP TABLE "VehicleType";
ALTER TABLE "new_VehicleType" RENAME TO "VehicleType";
CREATE UNIQUE INDEX "VehicleType_typeId_key" ON "VehicleType"("typeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
