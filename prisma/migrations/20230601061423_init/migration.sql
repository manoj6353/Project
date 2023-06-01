/*
  Warnings:

  - You are about to drop the column `deleted` on the `forgotTokens` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `forgotTokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[otp]` on the table `forgotTokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `expireTime` to the `forgotTokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `otp` to the `forgotTokens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `forgotTokens` DROP COLUMN `deleted`,
    DROP COLUMN `token`,
    ADD COLUMN `expireTime` DATETIME(3) NOT NULL,
    ADD COLUMN `otp` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `forgotTokens_otp_key` ON `forgotTokens`(`otp`);
