-- CreateTable
CREATE TABLE "VehicleMake" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "makeId" TEXT NOT NULL,
    "makeName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "VehicleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "typeId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "vehicleMakeId" INTEGER,
    CONSTRAINT "VehicleType_vehicleMakeId_fkey" FOREIGN KEY ("vehicleMakeId") REFERENCES "VehicleMake" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VehicleMake_makeId_key" ON "VehicleMake"("makeId");

-- CreateIndex
CREATE UNIQUE INDEX "VehicleType_typeId_key" ON "VehicleType"("typeId");
