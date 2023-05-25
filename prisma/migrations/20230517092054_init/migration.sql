/*
  Warnings:

  - You are about to drop the column `cityId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `stateId` on the `users` table. All the data in the column will be lost.
  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_countryId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_stateId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `cityId`,
    DROP COLUMN `countryId`,
    DROP COLUMN `stateId`,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `gender` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `address1` VARCHAR(191) NOT NULL,
    `address2` VARCHAR(191) NOT NULL,
    `pinCode` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,
    `countryId` INTEGER NOT NULL,
    `stateId` INTEGER NOT NULL,
    `cityId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_countryId_fkey` FOREIGN KEY (`countryId`) REFERENCES `countries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `states`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `cities`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
