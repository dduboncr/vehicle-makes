/*
  Warnings:

  - You are about to drop the `VehicleMake` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VehicleType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_VehicleMakeToVehicleType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VehicleMake";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "VehicleType";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_VehicleMakeToVehicleType";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Make" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "makeId" TEXT NOT NULL,
    "makeName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "makeId" TEXT NOT NULL,
    CONSTRAINT "Type_makeId_fkey" FOREIGN KEY ("makeId") REFERENCES "Make" ("makeId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Make_makeId_key" ON "Make"("makeId");

-- CreateIndex
CREATE UNIQUE INDEX "Type_typeId_key" ON "Type"("typeId");
