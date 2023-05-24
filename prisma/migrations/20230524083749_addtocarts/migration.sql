/*
  Warnings:

  - Added the required column `quantity` to the `addtocarts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `addtocarts` ADD COLUMN `quantity` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `orders` ADD COLUMN `price` VARCHAR(191) NOT NULL,
    ADD COLUMN `quantity` VARCHAR(191) NOT NULL;
