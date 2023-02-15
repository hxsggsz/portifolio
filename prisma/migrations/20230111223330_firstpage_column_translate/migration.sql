/*
  Warnings:

  - Added the required column `translation` to the `FirstPage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FirstPage" ADD COLUMN     "translation" STRING NOT NULL;
