/*
  Warnings:

  - You are about to alter the column `type` on the `menu` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `menu` ADD COLUMN `class` ENUM('FOOD', 'DRINK', 'OTHERS') NOT NULL DEFAULT 'FOOD',
    MODIFY `type` ENUM('ITIK', 'PORK', 'BEEF', 'CHICKEN', 'SEAFOODS', 'VEGETABLES') NOT NULL;
