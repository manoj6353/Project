/*
  Warnings:

  - Added the required column `totalprice` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orders` ADD COLUMN `totalprice` INTEGER NOT NULL;
