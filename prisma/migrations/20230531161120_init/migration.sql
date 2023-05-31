/*
  Warnings:

  - You are about to drop the `forgottokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `forgottokens` DROP FOREIGN KEY `forgotTokens_userId_fkey`;

-- DropTable
DROP TABLE `forgottokens`;
