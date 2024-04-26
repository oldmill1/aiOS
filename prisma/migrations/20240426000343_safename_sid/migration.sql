/*
  Warnings:

  - You are about to drop the column `safeName` on the `Program` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[SID]` on the table `Program` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `SID` to the `Program` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Program" DROP COLUMN "safeName",
ADD COLUMN     "SID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Program_SID_key" ON "Program"("SID");
