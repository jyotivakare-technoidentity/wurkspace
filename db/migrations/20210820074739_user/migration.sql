/*
  Warnings:

  - Added the required column `managerid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "firstname" TEXT,
ADD COLUMN     "managerid" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "WS_EMPLOYEES" ALTER COLUMN "LAST_NAME" DROP NOT NULL,
ALTER COLUMN "FULL_NAME" DROP NOT NULL,
ALTER COLUMN "IMAGE" SET DEFAULT E'/user_default.png';

-- AlterTable
ALTER TABLE "WS_USERS" ALTER COLUMN "PASSWORD" DROP NOT NULL;
