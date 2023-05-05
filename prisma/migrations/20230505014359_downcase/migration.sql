/*
  Warnings:

  - You are about to drop the column `ownerId` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `users` table. All the data in the column will be lost.
  - Added the required column `ownerid` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isactive` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_ownerId_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "ownerId",
ADD COLUMN     "ownerid" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "isActive",
ADD COLUMN     "isactive" BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
