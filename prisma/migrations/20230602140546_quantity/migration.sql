/*
  Warnings:

  - You are about to alter the column `quantity` on the `addtocarts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `addtocarts` MODIFY `quantity` INTEGER NOT NULL;
