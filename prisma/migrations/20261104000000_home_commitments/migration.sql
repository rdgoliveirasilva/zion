BEGIN;
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "categorySource" TEXT NOT NULL DEFAULT 'imported',
ADD COLUMN     "isBillPayment" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "RecurringRule" (
    "id" TEXT NOT NULL,
    "matchKey" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "accountId" TEXT,
    "amount" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "dueDay" INTEGER NOT NULL,
    "intervalMonths" INTEGER NOT NULL DEFAULT 1,
    "startMonth" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecurringRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commitment" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "category" TEXT NOT NULL DEFAULT 'outros',
    "source" TEXT NOT NULL DEFAULT 'recurring',
    "coveredByCard" BOOLEAN NOT NULL DEFAULT false,
    "transactionId" TEXT,
    "ruleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Commitment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RecurringRule_matchKey_key" ON "RecurringRule"("matchKey");

-- CreateIndex
CREATE UNIQUE INDEX "Commitment_key_key" ON "Commitment"("key");

-- CreateIndex
CREATE UNIQUE INDEX "Commitment_transactionId_key" ON "Commitment"("transactionId");

-- CreateIndex
CREATE INDEX "Commitment_dueDate_status_idx" ON "Commitment"("dueDate", "status");

-- AddForeignKey
ALTER TABLE "Commitment" ADD CONSTRAINT "Commitment_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commitment" ADD CONSTRAINT "Commitment_ruleId_fkey" FOREIGN KEY ("ruleId") REFERENCES "RecurringRule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Existing categories are preserved and treated as manually chosen.
UPDATE "Transaction" SET "categorySource" = 'manual' WHERE "category" IS NOT NULL AND "category" <> 'outros';
-- Keep legacy transaction IDs, amounts and dates intact, linking their obligations.
INSERT INTO "Commitment" ("id", "key", "description", "amount", "dueDate", "status", "category", "source", "transactionId", "updatedAt")
SELECT 'legacy-' || "id", 'legacy:' || "id", "description", "amount", "date", CASE WHEN "status" IN ('paid','cleared','reconciled') THEN 'paid' ELSE 'pending' END, COALESCE("category", 'outros'), 'manual', "id", CURRENT_TIMESTAMP FROM "Transaction" WHERE "type" = 'bill';

ALTER TABLE "Transaction" ADD COLUMN "pluggyTransactionId" TEXT;
CREATE UNIQUE INDEX "Transaction_pluggyTransactionId_key" ON "Transaction"("pluggyTransactionId");
COMMIT;
