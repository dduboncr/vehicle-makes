/*
  Warnings:

  - You are about to drop the column `vehicleMakeId` on the `VehicleType` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_VehicleMakeToVehicleType" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_VehicleMakeToVehicleType_A_fkey" FOREIGN KEY ("A") REFERENCES "VehicleMake" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_VehicleMakeToVehicleType_B_fkey" FOREIGN KEY ("B") REFERENCES "VehicleType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VehicleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_VehicleType" ("id", "name", "typeId") SELECT "id", "name", "typeId" FROM "VehicleType";
DROP TABLE "VehicleType";
ALTER TABLE "new_VehicleType" RENAME TO "VehicleType";
CREATE UNIQUE INDEX "VehicleType_typeId_key" ON "VehicleType"("typeId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_VehicleMakeToVehicleType_AB_unique" ON "_VehicleMakeToVehicleType"("A", "B");

-- CreateIndex
CREATE INDEX "_VehicleMakeToVehicleType_B_index" ON "_VehicleMakeToVehicleType"("B");
