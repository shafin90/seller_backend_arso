-- CreateEnum
CREATE TYPE "CommissionStatus" AS ENUM ('PENDING', 'PAID');

-- CreateEnum
CREATE TYPE "WithdrawalStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ACCEPTED', 'PICKED_UP', 'DELIVERED', 'CANCELLED');

-- CreateTable
CREATE TABLE "DeliveryMan" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "profilePicture" TEXT,
    "idCardUpload" TEXT,
    "drivingLicenseUpload" TEXT,
    "accountVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "DeliveryMan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commission" (
    "id" SERIAL NOT NULL,
    "deliveryManId" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "CommissionStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Commission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Withdrawal" (
    "id" SERIAL NOT NULL,
    "deliveryManId" INTEGER NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "WithdrawalStatus" NOT NULL DEFAULT 'PENDING',
    "paymentMethod" TEXT NOT NULL,

    CONSTRAINT "Withdrawal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "deliveryManId" INTEGER NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "orderValue" DECIMAL(65,30) NOT NULL,
    "orderStatus" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "deliveryAddress" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "customerPhoneNumber" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Commission" ADD CONSTRAINT "Commission_deliveryManId_fkey" FOREIGN KEY ("deliveryManId") REFERENCES "DeliveryMan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Withdrawal" ADD CONSTRAINT "Withdrawal_deliveryManId_fkey" FOREIGN KEY ("deliveryManId") REFERENCES "DeliveryMan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_deliveryManId_fkey" FOREIGN KEY ("deliveryManId") REFERENCES "DeliveryMan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
