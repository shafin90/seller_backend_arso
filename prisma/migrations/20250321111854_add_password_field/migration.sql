/*
  Warnings:

  - Added the required column `password` to the `DeliveryMan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DeliveryMan" ADD COLUMN     "password" TEXT NOT NULL;
